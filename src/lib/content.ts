import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content/projects");

export interface ProjectMeta {
  slug: string;
  order: number;
  title: string;
  summary: string;
  results: string;
  cta: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  image: string;
  imageAlt: string;
  bg: string;
  darkText: boolean;
}

export function getProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    const { data } = matter(raw);
    return data as ProjectMeta;
  });

  return projects.sort((a, b) => a.order - b.order);
}
