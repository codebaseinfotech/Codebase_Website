import { connectDB } from "@/lib/mongodb";
import Blog, { IBlog } from "@/models/Blog";

export interface BlogData {
  slug: string;
  title: string;
  description: string;
  image: string;
  faqs: { question: string; answer: string }[];
  createdAt: string;
  updatedAt: string;
}

function toBlogData(doc: IBlog): BlogData {
  return {
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    image: doc.image,
    faqs: doc.faqs,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getAllBlogs(): Promise<BlogData[]> {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean<IBlog[]>();
  return blogs.map((b) => ({
    slug: b.slug,
    title: b.title,
    description: b.description,
    image: b.image,
    faqs: b.faqs,
    createdAt: new Date(b.createdAt).toISOString(),
    updatedAt: new Date(b.updatedAt).toISOString(),
  }));
}

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  await connectDB();
  const blog = await Blog.findOne({ slug }).lean<IBlog>();
  if (!blog) return null;
  return {
    slug: blog.slug,
    title: blog.title,
    description: blog.description,
    image: blog.image,
    faqs: blog.faqs,
    createdAt: new Date(blog.createdAt).toISOString(),
    updatedAt: new Date(blog.updatedAt).toISOString(),
  };
}

export async function createBlog(data: {
  title: string;
  description: string;
  image: string;
  faqs: { question: string; answer: string }[];
}): Promise<BlogData> {
  await connectDB();
  let slug = generateSlug(data.title);

  // Ensure unique slug
  let existing = await Blog.findOne({ slug });
  let counter = 1;
  while (existing) {
    slug = `${generateSlug(data.title)}-${counter}`;
    existing = await Blog.findOne({ slug });
    counter++;
  }

  const blog = await Blog.create({ ...data, slug });
  return toBlogData(blog);
}

export async function updateBlog(
  slug: string,
  data: Partial<{ title: string; description: string; image: string; faqs: { question: string; answer: string }[] }>
): Promise<BlogData | null> {
  await connectDB();
  const blog = await Blog.findOneAndUpdate(
    { slug },
    { $set: data },
    { new: true }
  );
  if (!blog) return null;
  return toBlogData(blog);
}

export async function deleteBlog(slug: string): Promise<string | null> {
  await connectDB();
  const blog = await Blog.findOneAndDelete({ slug });
  if (!blog) return null;
  return blog.image; // Return image URL so caller can delete from Cloudinary
}
