import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface Params {
  params: { name: string }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.name);

  if (!project) {
    return {
      title: "Project Not Found – MyPortfolio",
      description: "This project does not exist.",
    }
  }

  return {
    title: `${project.name} – MyPortfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} – MyPortfolio`,
      description: project.description,
      url: `https://habeebamoo.vercel.app/project/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} – MyPortfolio`,
      description: project.description,
    },
  };
}
