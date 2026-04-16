import { NextResponse } from "next/server";
import { getAllProjects, createProject } from "@/lib/project-service";

export async function GET() {
  try {
    const projects = await getAllProjects(true);
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const type = formData.get("type") as string;
    const iOS_Link = formData.get("iOS_Link") as string;
    const Android_Link = formData.get("Android_Link") as string;
    const website_link = formData.get("website_link") as string;
    const description = formData.get("description") as string;
    const isActiveStr = formData.get("isActive") as string;
    const isActive = isActiveStr === "false" ? false : true;
    const imageFile = formData.get("image") as File;
    const client = formData.get("client") as string;
    
    // Arrays
    const technologiesStr = formData.get("technologies") as string;
    const resultsStr = formData.get("results") as string;
    const technologies = technologiesStr ? JSON.parse(technologiesStr) : [];
    const results = resultsStr ? JSON.parse(resultsStr) : [];

    // Case Study fields
    const challenge = formData.get("caseStudy.challenge") as string;
    const solution = formData.get("caseStudy.solution") as string;
    const outcome = formData.get("caseStudy.outcome") as string;
    const timeline = formData.get("caseStudy.timeline") as string;
    const teamSize = formData.get("caseStudy.teamSize") as string;
    const projectDetails = formData.get("caseStudy.projectDetails") as string;
    
    const csHighlightsStr = formData.get("caseStudy.AppHighlights") as string;
    const csTechnologiesStr = formData.get("caseStudy.technologies") as string;
    const csThirdPartyStr = formData.get("caseStudy.thirdPartyServices") as string;
    
    const caseStudy = {
      challenge,
      solution,
      outcome,
      timeline,
      teamSize,
      projectDetails,
      AppHighlights: csHighlightsStr ? JSON.parse(csHighlightsStr) : [],
      technologies: csTechnologiesStr ? JSON.parse(csTechnologiesStr) : [],
      thirdPartyServices: csThirdPartyStr ? JSON.parse(csThirdPartyStr) : [],
    };

    if (!title || !description || !imageFile || !category || !type) {
      return NextResponse.json({ error: "Title, category, type, description, and image are required" }, { status: 400 });
    }

    // Process image upload to Cloudinary
    let imageUrl = "";
    try {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadPromise = new Promise((resolve, reject) => {
        const cloudinaryConfig = require("cloudinary").v2;
        cloudinaryConfig.config({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        const uploadStream = cloudinaryConfig.uploader.upload_stream(
          { folder: "codebase/projects" },
          (error: any, result: any) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      const result: any = await uploadPromise;
      imageUrl = result.secure_url;
    } catch (uploadError) {
      console.error("Cloudinary upload failed:", uploadError);
      return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }

    const projectData = {
      title,
      category,
      type,
      iOS_Link,
      Android_Link,
      website_link,
      description,
      image: imageUrl,
      isActive,
      client,
      technologies,
      results,
      caseStudy,
    };

    const newProject = await createProject(projectData);
    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
