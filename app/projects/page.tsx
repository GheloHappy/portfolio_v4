import Link from "next/link";
import AllProjects from "../components/AllProjects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
          All Projects
        </h1>
        <p className="mt-3 text-base text-muted sm:text-lg">
          A complete list of everything I&apos;ve built.
        </p>

        <AllProjects />
      </div>
    </section>
  );
}
