import { connectDB } from "@/lib/mongodb";
import Project, { IProject, ICaseStudy } from "@/models/Project";

export interface ProjectData {
  _id?: string;
  title: string;
  category: string;
  type: string;
  iOS_Link?: string;
  Android_Link?: string;
  website_link?: string;
  description: string;
  image: string;
  technologies?: string[];
  client?: string;
  results?: string[];
  caseStudy?: ICaseStudy;
  createdAt?: string;
  updatedAt?: string;
}

function toProjectData(doc: IProject): ProjectData {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    category: doc.category,
    type: doc.type,
    iOS_Link: doc.iOS_Link,
    Android_Link: doc.Android_Link,
    website_link: doc.website_link,
    description: doc.description,
    image: doc.image,
    technologies: doc.technologies,
    client: doc.client,
    results: doc.results,
    caseStudy: doc.caseStudy,
    createdAt: doc.createdAt?.toISOString() || new Date().toISOString(),
    updatedAt: doc.updatedAt?.toISOString() || new Date().toISOString(),
  };
}

export async function getAllProjects(): Promise<ProjectData[]> {
  await connectDB();
  const projects = await Project.find().sort({ createdAt: -1 }).lean<IProject[]>();
  return projects.map((p) => ({
    _id: (p as any)._id?.toString() || p.id?.toString(),
    title: p.title,
    category: p.category,
    type: p.type,
    iOS_Link: p.iOS_Link,
    Android_Link: p.Android_Link,
    website_link: p.website_link,
    description: p.description,
    image: p.image,
    technologies: p.technologies,
    client: p.client,
    results: p.results,
    caseStudy: p.caseStudy,
    createdAt: p.createdAt ? new Date(p.createdAt).toISOString() : new Date().toISOString(),
    updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : new Date().toISOString(),
  }));
}

export async function getProjectById(id: string): Promise<ProjectData | null> {
  await connectDB();
  const project = await Project.findById(id).lean<IProject>();
  if (!project) return null;
  return {
    _id: (project as any)._id?.toString() || project.id?.toString(),
    title: project.title,
    category: project.category,
    type: project.type,
    iOS_Link: project.iOS_Link,
    Android_Link: project.Android_Link,
    website_link: project.website_link,
    description: project.description,
    image: project.image,
    technologies: project.technologies,
    client: project.client,
    results: project.results,
    caseStudy: project.caseStudy,
    createdAt: project.createdAt ? new Date(project.createdAt).toISOString() : new Date().toISOString(),
    updatedAt: project.updatedAt ? new Date(project.updatedAt).toISOString() : new Date().toISOString(),
  };
}

export async function createProject(data: ProjectData): Promise<ProjectData> {
  await connectDB();
  const project = await Project.create(data);
  return toProjectData(project);
}

export async function updateProject(id: string, data: Partial<ProjectData>): Promise<ProjectData | null> {
  await connectDB();
  const project = await Project.findByIdAndUpdate(id, { $set: data }, { new: true });
  if (!project) return null;
  return toProjectData(project);
}

export async function deleteProject(id: string): Promise<string | null> {
  await connectDB();
  const project = await Project.findByIdAndDelete(id);
  if (!project) return null;
  return project.image; // Return image URL to delete from Cloudinary
}
