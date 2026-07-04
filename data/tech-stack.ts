export interface TechCategory {
  label: string;
  color: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    label: "Languages",
    color: "bg-blue-500",
    items: ["JavaScript", "TypeScript", "HTML/CSS", "Java", "C#", "PHP", "SQL"],
  },
  {
    label: "Frameworks",
    color: "bg-purple-500",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "Tailwind CSS",
      "Laravel",
    ],
  },
  {
    label: "Databases",
    color: "bg-emerald-500",
    items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "MongoDB"],
  },
  {
    label: "Tools & Platforms",
    color: "bg-amber-500",
    items: [
      "Docker",
      "Git",
      "Linux",
      "Nginx",
      "Cloudflare",
      "Jenkins",
      "Android Studio",
      "Vercel",
      "AWS",
      "KILO ai",
      "Claude",
      "Openhands AI",
    ],
  },
];

export default techCategories;
