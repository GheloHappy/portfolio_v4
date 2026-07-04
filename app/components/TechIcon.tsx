import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPhp,
  SiSharp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiNginx,
  SiCloudflare,
  SiJenkins,
  SiAndroidstudio,
  SiVercel,
} from "react-icons/si";
import { DiJava, DiAws, DiMsqlServer, DiDatabase } from "react-icons/di";
import type { IconType } from "react-icons";

const iconMap: Record<string, { icon: IconType; className: string }> = {
  JavaScript: { icon: SiJavascript, className: "text-yellow-500" },
  TypeScript: { icon: SiTypescript, className: "text-blue-500" },
  "HTML/CSS": { icon: SiHtml5, className: "text-orange-500" },
  Java: { icon: DiJava, className: "text-red-500" },
  "C#": { icon: SiSharp, className: "text-green-600" },
  PHP: { icon: SiPhp, className: "text-indigo-500" },
  SQL: { icon: DiDatabase, className: "text-sky-500" },
  React: { icon: SiReact, className: "text-sky-500" },
  "React Native": { icon: SiReact, className: "text-sky-500" },
  "Next.js": { icon: SiNextdotjs, className: "text-text" },
  "Node.js": { icon: SiNodedotjs, className: "text-green-500" },
  NestJS: { icon: SiNestjs, className: "text-red-500" },
  "Tailwind CSS": { icon: SiTailwindcss, className: "text-cyan-500" },
  Laravel: { icon: SiLaravel, className: "text-red-500" },
  PostgreSQL: { icon: SiPostgresql, className: "text-blue-500" },
  MySQL: { icon: SiMysql, className: "text-blue-600" },
  "SQL Server": { icon: DiMsqlServer, className: "text-red-600" },
  SQLite: { icon: SiSqlite, className: "text-blue-500" },
  MongoDB: { icon: SiMongodb, className: "text-green-500" },
  Docker: { icon: SiDocker, className: "text-sky-500" },
  Git: { icon: SiGit, className: "text-orange-500" },
  Linux: { icon: SiLinux, className: "text-yellow-500" },
  Nginx: { icon: SiNginx, className: "text-green-600" },
  Cloudflare: { icon: SiCloudflare, className: "text-orange-500" },
  Jenkins: { icon: SiJenkins, className: "text-red-500" },
  "Android Studio": { icon: SiAndroidstudio, className: "text-green-500" },
  Vercel: { icon: SiVercel, className: "text-text" },
  AWS: { icon: DiAws, className: "text-amber-500" },
};

export default function TechIcon({ name }: { name: string }) {
  const entry = iconMap[name];
  if (!entry) return null;

  const Icon = entry.icon;
  return <Icon className={`h-3.5 w-3.5 ${entry.className}`} />;
}
