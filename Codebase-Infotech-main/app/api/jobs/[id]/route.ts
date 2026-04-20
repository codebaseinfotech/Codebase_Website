import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const body = await request.json();

    const updatedJob = await Job.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(updatedJob, { status: 200 });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json({ error: "Failed to update job record" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const deletedJob = await Job.findByIdAndDelete(params.id);

    if (!deletedJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json({ error: "Failed to delete job record" }, { status: 500 });
  }
}
