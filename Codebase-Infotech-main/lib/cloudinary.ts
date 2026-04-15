import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "codebase-blogs",
        resource_type: "image",
        quality: "auto",
        fetch_format: "auto",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url || "");
      }
    );
    uploadStream.end(buffer);
  });
}

export async function deleteImage(imageUrl: string): Promise<void> {
  try {
    // Extract public_id from Cloudinary URL
    const parts = imageUrl.split("/");
    const folderIndex = parts.indexOf("codebase-blogs");
    if (folderIndex === -1) return;
    const fileWithExt = parts.slice(folderIndex).join("/");
    const publicId = fileWithExt.replace(/\.[^/.]+$/, ""); // remove extension
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error("Cloudinary delete error:", err);
  }
}

export default cloudinary;
