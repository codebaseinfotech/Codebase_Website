import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("active") === "true";

    const filter = activeOnly ? { isActive: true } : {};
    
    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Server-side validation
    if (!body.title || !body.location || !body.type || !body.experience || !body.summary || !body.education) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newJob = new Job({
      title: body.title,
      location: body.location,
      type: body.type,
      experience: body.experience,
      summary: body.summary,
      responsibilities: body.responsibilities || [],
      requiredSkills: body.requiredSkills || [],
      preferredSkills: body.preferredSkills || [],
      education: body.education,
      offers: body.offers || [],
      isActive: body.isActive ?? true,
    });

    const savedJob = await newJob.save();
    return NextResponse.json(savedJob, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({ error: "Failed to create job record" }, { status: 500 });
  }
}
