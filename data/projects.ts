import { img, R2_BASE } from "../lib/constants";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  images: string[];
  link: string;
  apk: string | null;
}

const allProjects: Project[] = [
  {
    title: "Happy Snippet",
    description:
      "A full-stack web application for developers to store, manage, and search code snippets. Features syntax highlighting, categorization, and a clean searchable interface.",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "NestJs",
    ],
    image: img("/projects/happy-snippets/images/1.png"),
    images: [
      img("/projects/happy-snippets/images/1.png"),
      img("/projects/happy-snippets/images/2.png"),
      img("/projects/happy-snippets/images/3.png"),
    ],
    link: "https://happy-snippet.ghelonico.site",
    apk: null,
  },
  {
    title: "TYEW (Track Your Empty Wallet)",
    description:
      "TYEW (Track Your Empty Wallet) is an offline-first finance tracker that helps users manage income, expenses, and rental payments without an internet connection. It leverages AI-powered insights to analyze spending habits and provide smarter financial recommendations for better money management.",
    tags: ["React Native", "TypeScript", "Express.js", "SQLite", "PostgreSQL"],
    image: img("/projects/tyew/images/1.jpg"),
    images: [
      img("/projects/tyew/images/1.jpg"),
      img("/projects/tyew/images/2.jpg"),
      img("/projects/tyew/images/3.jpg"),
      img("/projects/tyew/images/4.jpg"),
      img("/projects/tyew/images/5.jpg"),
    ],
    link: "",
    apk: `${R2_BASE}/projects/tyew/apk/tyew.apk`,
  },
  {
    title: "Barcode System V3",
    description:
      "A cross-platform inventory monitoring system with offline sync capabilities. Uses barcode scanners via Wi-Fi and local networks, with API integration for remote warehouse support.",
    tags: ["React Native", "TypeScript", "Express.js", "SQL Server", "SQLite"],
    image: img("/projects/barcode-system/images/1.jpg"),
    images: [
      img("/projects/barcode-system/images/1.jpg"),
      img("/projects/barcode-system/images/2.jpg"),
      img("/projects/barcode-system/images/3.jpg"),
      img("/projects/barcode-system/images/4.jpg"),
      img("/projects/barcode-system/images/5.jpg"),
    ],
    link: "",
    apk: null,
  },
  {
    title: "SARIKart",
    description:
      "An ecommerce web application for customer orders with features like product browsing, shopping cart, and secure checkout.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: img("/projects/sarikart/images/1.png"),
    images: [
      img("/projects/sarikart/images/1.png"),
      img("/projects/sarikart/images/2.png"),
      img("/projects/sarikart/images/3.png"),
      img("/projects/sarikart/images/4.png"),
    ],
    link: "https://sarikart.monheim.app",
    apk: null,
  },
  {
    title: "CMDI Ordering System",
    description:
      "A React Native mobile app that streamlines the ordering process between sales agents and invoicers. Features offline-first functionality, order synchronization, customer visit tagging, and image capture.",
    tags: ["React Native", "TypeScript", "Node.js", "SQLite", "SQL Server"],
    image: img("/projects/cmdi-ordering/images/1.jpg"),
    images: [
      img("/projects/cmdi-ordering/images/1.jpg"),
      img("/projects/cmdi-ordering/images/2.jpg"),
      img("/projects/cmdi-ordering/images/3.jpg"),
      img("/projects/cmdi-ordering/images/4.jpg"),
    ],
    link: "",
    apk: null,
  },
  {
    title: "Online Timekeeping Monitoring",
    description:
      "A web-based time tracking solution that enables employees to monitor attendance records, view time logs, and manage leave requests in real-time.",
    tags: ["React", "Node.js", "SQL Server", "TypeScript"],
    image: img("/projects/timekeeping/images/1.png"),
    images: [
      img("/projects/timekeeping/images/1.png"),
      img("/projects/timekeeping/images/2.png"),
      img("/projects/timekeeping/images/3.png"),
    ],
    link: "https://timekeeping.monheim.app",
    apk: null,
  },
  {
    title: "Van Sales",
    description:
      "A Sales Force Automation (SFA) app developed to facilitate paperless sales transactions conducted from delivery vans, using tablets paired with Bluetooth printers.",
    tags: ["Java", "SQL Server", "SQLite"],
    image: null,
    images: [],
    link: "",
    apk: null,
  },
  {
    title: "MLDI Ordering System",
    description:
      "An enterprise-level ordering system featuring real-time inventory tracking, automated order processing, and a React Native mobile app with offline capabilities.",
    tags: ["React", "Node.js", "SQL Server"],
    image: null,
    images: [],
    link: "",
    apk: null,
  },
  {
    title: "Timekeeping",
    description:
      "A desktop application that efficiently tracks employee attendance, offering barcode ID or biometric verification for clocking in and out.",
    tags: ["C#", ".NET", "SQL Server"],
    image: img("/projects/timekeeping/images/1.png"),
    images: [
      img("/projects/timekeeping/images/1.png"),
      img("/projects/timekeeping/images/2.png"),
      img("/projects/timekeeping/images/3.png"),
    ],
    link: "",
    apk: null,
  },
  {
    title: "Warehouse Delivery Schedule",
    description:
      "A desktop application designed to streamline invoice management, automating the assignment of delivery trucks and optimizing routing for efficient deliveries.",
    tags: ["C#", ".NET", "SQL Server"],
    image: null,
    images: [],
    link: "",
    apk: null,
  },
  {
    title: "B2B Converter",
    description:
      "A desktop tool that converts .csv and .xml files from client portals or Iconnect for direct processing of purchase orders.",
    tags: ["C#", ".NET", "XML"],
    image: null,
    images: [],
    link: "",
    apk: null,
  },
];

export const featuredProjects = allProjects.slice(0, 4);
export default allProjects;
