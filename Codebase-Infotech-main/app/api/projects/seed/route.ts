import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { projects } from "@/components/projects";

// GET /api/projects/seed
export async function GET() {
  try {
    await connectDB();
    
    // Check if projects already exist
    const count = await Project.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: "Projects already seeded", count });
    }

    // Map static projects to Mongo documents
    const mappedProjects = projects.map((p) => {
      // Create a clean record without the old 'id' field, MongoDB auto-generates _id
      const newProjectData = { ...p, id: undefined };
      delete newProjectData.id;
      return newProjectData;
    });

    await Project.insertMany(mappedProjects);
    
    return NextResponse.json({ success: true, insertedCount: mappedProjects.length });
  } catch (err: any) {
    console.error("Seeding error:", err);
    return NextResponse.json({ error: "Failed to seed", details: err.message }, { status: 500 });
  }
}
