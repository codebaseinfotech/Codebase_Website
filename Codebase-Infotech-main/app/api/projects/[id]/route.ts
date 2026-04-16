import { NextResponse } from "next/server"
import { getProjectById, updateProject, deleteProject } from "@/lib/project-service"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Helper to extract Cloudinary public ID from URL
function getPublicIdFromUrl(url: string): string | null {
  if (!url || !url.includes("cloudinary.com")) return null
  try {
    const parts = url.split("/")
    const filename = parts[parts.length - 1]
    const folder = parts[parts.length - 2]
    const publicId = filename.split(".")[0]
    return `${folder}/${publicId}`
  } catch (error) {
    return null
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const project = await getProjectById(params.id)
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    return NextResponse.json({ project })
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const formData = await request.formData()
    
    const title = formData.get("title") as string
    const category = formData.get("category") as string
    const type = formData.get("type") as string
    const iOS_Link = formData.get("iOS_Link") as string
    const Android_Link = formData.get("Android_Link") as string
    const website_link = formData.get("website_link") as string
    const description = formData.get("description") as string
    const client = formData.get("client") as string
    
    // Arrays
    const technologiesStr = formData.get("technologies") as string
    const resultsStr = formData.get("results") as string
    const technologies = technologiesStr ? JSON.parse(technologiesStr) : undefined
    const results = resultsStr ? JSON.parse(resultsStr) : undefined

    // Case Study fields
    const challenge = formData.get("caseStudy.challenge") as string
    const solution = formData.get("caseStudy.solution") as string
    const outcome = formData.get("caseStudy.outcome") as string
    const timeline = formData.get("caseStudy.timeline") as string
    const teamSize = formData.get("caseStudy.teamSize") as string
    const projectDetails = formData.get("caseStudy.projectDetails") as string
    
    const csHighlightsStr = formData.get("caseStudy.AppHighlights") as string
    const csTechnologiesStr = formData.get("caseStudy.technologies") as string
    const csThirdPartyStr = formData.get("caseStudy.thirdPartyServices") as string
    
    const caseStudy = {
      challenge,
      solution,
      outcome,
      timeline,
      teamSize,
      projectDetails,
      AppHighlights: csHighlightsStr ? JSON.parse(csHighlightsStr) : undefined,
      technologies: csTechnologiesStr ? JSON.parse(csTechnologiesStr) : undefined,
      thirdPartyServices: csThirdPartyStr ? JSON.parse(csThirdPartyStr) : undefined,
    }

    const projectData: any = {
      title,
      category,
      type,
      iOS_Link,
      Android_Link,
      website_link,
      description,
      client,
    }

    if (technologies) projectData.technologies = technologies
    if (results) projectData.results = results
    
    // Populate caseStudy only if at least one field is provided
    if (challenge || solution || outcome || timeline || projectDetails || teamSize || csHighlightsStr || csTechnologiesStr || csThirdPartyStr) {
       projectData.caseStudy = caseStudy;
    }

    // Handle new image upload
    const imageFile = formData.get("image") as File | null
    if (imageFile) {
      try {
        const bytes = await imageFile.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const uploadPromise = new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "codebase/projects" },
            (error: any, result: any) => {
              if (error) reject(error)
              else resolve(result)
            }
          )
          uploadStream.end(buffer)
        })

        const result: any = await uploadPromise
        projectData.image = result.secure_url

        // Try to delete old image
        const existingProject = await getProjectById(params.id)
        if (existingProject?.image) {
          const publicId = getPublicIdFromUrl(existingProject.image)
          if (publicId) {
            await cloudinary.uploader.destroy(publicId)
          }
        }
      } catch (uploadError) {
        console.error("Cloudinary upload failed:", uploadError)
        return NextResponse.json({ error: "Failed to upload new image" }, { status: 500 })
      }
    }

    const updatedProject = await updateProject(params.id, projectData)
    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json({ project: updatedProject })
  } catch (error) {
    console.error("Error updating project:", error)
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const imageUrl = await deleteProject(params.id)
    if (!imageUrl) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    // Delete image from Cloudinary
    if (imageUrl) {
      const publicId = getPublicIdFromUrl(imageUrl)
      if (publicId) {
        await cloudinary.uploader.destroy(publicId).catch((err) => {
          console.error("Failed to delete image from Cloudinary:", err)
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}
