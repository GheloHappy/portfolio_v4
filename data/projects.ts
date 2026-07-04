export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  apk: string | null;
}

const allProjects: Project[] = [
  {
    title: "CMDI Ordering System",
    description:
      "A React Native mobile app that streamlines the ordering process between sales agents and invoicers. Features offline-first functionality, order synchronization, customer visit tagging, and image capture.",
    tags: ["React Native", "TypeScript", "Node.js", "SQLite"],
    image: "/projects/cmdi.jpg",
    link: "https://github.com/GheloHappy",
    apk: "#",
  },
  {
    title: "Barcode System V3",
    description:
      "A cross-platform inventory monitoring system with offline sync capabilities. Uses barcode scanners via Wi-Fi and local networks, with API integration for remote warehouse support.",
    tags: ["React Native", "TypeScript", "Express.js", "PostgreSQL"],
    image: "/projects/barcode.jpg",
    link: "https://github.com/GheloHappy",
    apk: "#",
  },
  {
    title: "MLDI Ordering System",
    description:
      "An enterprise-level ordering system featuring real-time inventory tracking, automated order processing, and a React Native mobile app with offline capabilities.",
    tags: ["React", "Node.js", "React Native", "PostgreSQL"],
    image: "/projects/mldi.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Happy Snippet",
    description:
      "A full-stack web application for developers to store, manage, and search code snippets. Features syntax highlighting, categorization, and a clean searchable interface.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/happy-snippet.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Happy Snippet V2",
    description:
      "Version 2 of the Happy Snippet web application with enhanced features, improved performance, and a refreshed UI.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    image: "/projects/happy-snippet.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "SARIKart",
    description:
      "An ecommerce web application for customer orders with features like product browsing, shopping cart, and secure checkout.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/sarikart.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Online Timekeeping Monitoring",
    description:
      "A web-based time tracking solution that enables employees to monitor attendance records, view time logs, and manage leave requests in real-time.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    image: "/projects/timekeeping.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Barcode System",
    description:
      "A system crafted to streamline the monitoring of inbound and outbound shipments, as well as inventory status, using tablets and barcode scanners connected via Wi-Fi and local networks.",
    tags: ["React", "Node.js", "PostgreSQL", "Express.js"],
    image: "/projects/barcode.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Van Sales",
    description:
      "A Sales Force Automation (SFA) app developed to facilitate paperless sales transactions conducted from delivery vans, using tablets paired with Bluetooth printers.",
    tags: ["React Native", "TypeScript", "Node.js", "SQLite"],
    image: "/projects/van-sales.jpg",
    link: "https://github.com/GheloHappy",
    apk: "#",
  },
  {
    title: "Timekeeping",
    description:
      "A desktop application that efficiently tracks employee attendance, offering barcode ID or biometric verification for clocking in and out.",
    tags: ["C#", ".NET", "SQL Server"],
    image: "/projects/timekeeping.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "Warehouse Delivery Schedule",
    description:
      "A desktop application designed to streamline invoice management, automating the assignment of delivery trucks and optimizing routing for efficient deliveries.",
    tags: ["C#", ".NET", "SQL Server"],
    image: "/projects/warehouse.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
  {
    title: "B2B Converter",
    description:
      "A tool that converts .csv and .xml files from client portals or Iconnect for direct processing of purchase orders.",
    tags: ["C#", ".NET", "XML"],
    image: "/projects/b2b.jpg",
    link: "https://github.com/GheloHappy",
    apk: null,
  },
];

export const featuredProjects = allProjects.slice(0, 4);
export default allProjects;
