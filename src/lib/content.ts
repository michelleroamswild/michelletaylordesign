import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content/projects");
const pagesDir = path.join(process.cwd(), "content/pages");

export interface KeyResult {
  icon: string;
  value: string;
  label: string;
}

export interface ProjectMeta {
  slug: string;
  order: number;
  title: string;
  summary: string;
  results: string;
  keyResults?: KeyResult[];
  cta: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight?: number;
  image: string;
  imageAlt: string;
  bg: string;
  darkText: boolean;
  featured?: boolean;
  tags?: string[];
  accent?: string;
  lightAccent?: boolean;
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

export interface HomeCallout {
  company: string;
  metric: string;
  detail: string;
}

export interface HomeMeta {
  greeting: string;
  headline: string;
  description: string;
  traits: string[];
  callouts: HomeCallout[];
}

export function getHomePage(): HomeMeta {
  const raw = fs.readFileSync(path.join(pagesDir, "home.md"), "utf-8");
  const { data } = matter(raw);
  return data as HomeMeta;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPageContent(slug: string): Record<string, any> {
  const raw = fs.readFileSync(path.join(pagesDir, `${slug}.md`), "utf-8");
  const { data } = matter(raw);
  return data;
}
