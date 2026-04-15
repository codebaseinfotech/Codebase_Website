import { NextRequest, NextResponse } from "next/server";
import { getBlogBySlug, updateBlog, deleteBlog } from "@/lib/blog-service";
import { uploadImage, deleteImage } from "@/lib/cloudinary";

// GET — fetch a single blog by slug (public)
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Fetch blog error:", err);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

// PUT — update a blog (admin only)
export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const faqsRaw = formData.get("faqs") as string;
    const imageFile = formData.get("image") as File | null;

    const updateData: Record<string, unknown> = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (faqsRaw) updateData.faqs = JSON.parse(faqsRaw);

    // Upload new image to Cloudinary if provided
    if (imageFile && imageFile.size > 0) {
      // Delete old image from Cloudinary
      const existing = await getBlogBySlug(slug);
      if (existing?.image) {
        await deleteImage(existing.image);
      }
      updateData.image = await uploadImage(imageFile);
    }

    const updated = await updateBlog(slug, updateData);
    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Blog update error:", err);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE — delete a blog (admin only)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  try {
    const imageUrl = await deleteBlog(slug);
    if (imageUrl === null) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    // Delete image from Cloudinary
    if (imageUrl) {
      await deleteImage(imageUrl);
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Blog delete error:", err);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
