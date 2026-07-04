import { R2_PUBLIC } from "../lib/constants";

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  experience: string;
  expertise: string[];
  tagline: string;
  description: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

const profile: Profile = {
  name: "Ghelonico Maligaya",
  role: "Programmer / Full Stack Developer",
  location: "Philippines",
  email: "ghelonico.maligaya@gmail.com",
  experience: "6+ years",
  expertise: ["Full Stack Web", "Mobile Apps", "Desktop Apps"],
  tagline:
    "I build scalable web, desktop and mobile applications that deliver real business value.",
  description:
    "Specializing in building custom software solutions that simplify complex business processes, improve productivity, and support long-term growth.",
  github: "https://github.com/GheloHappy",
  linkedin: "https://www.linkedin.com/in/ghelonico-maligaya-52a3bb204/",
  resumeUrl: `${R2_PUBLIC}/Maligaya-Ghelonico-G.-CV.pdf`,
};

export default profile;
