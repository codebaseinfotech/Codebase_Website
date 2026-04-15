import { NextRequest, NextResponse } from "next/server";
import { getAllBlogs, createBlog } from "@/lib/blog-service";
import { uploadImage } from "@/lib/cloudinary";

// GET — fetch all blogs (public)
export async function GET() {
  try {
    const blogs = await getAllBlogs();
    return NextResponse.json(blogs);
  } catch (err) {
    console.error("Fetch blogs error:", err);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST — create a new blog (admin only)
export async function POST(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const faqsRaw = formData.get("faqs") as string;
    const imageFile = formData.get("image") as File | null;

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    let imagePath = "";

    // Upload image to Cloudinary
    if (imageFile && imageFile.size > 0) {
      imagePath = await uploadImage(imageFile);
    }

    const faqs = faqsRaw ? JSON.parse(faqsRaw) : [];
    const blog = await createBlog({ title, description, image: imagePath, faqs });
    return NextResponse.json(blog, { status: 201 });
  } catch (err) {
    console.error("Blog create error:", err);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
