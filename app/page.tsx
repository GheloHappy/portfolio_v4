import HeroActions from "./components/HeroActions";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that streamlined inventory management for a mid-sized logistics company, reducing manual work by 40%.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Beta",
    description:
      "Cross-platform mobile app built for field service technicians, featuring offline-first capabilities and real-time sync.",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    title: "Project Gamma",
    description:
      "Internal dashboard and analytics platform that gave leadership real-time visibility into KPIs across departments.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js"],
  },
];

export default function Home() {
  return (
    <>
      {/* ────── Hero ────── */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center px-6 sm:px-10 lg:flex-row lg:px-16"
      >
        {/* Left */}
        <div className="flex flex-1 flex-col justify-center py-16 lg:py-0">
          <p className="animate-fade-in-up delay-1 text-sm font-medium uppercase tracking-widest text-primary sm:text-base">
            Programmer / Full Stack Developer
          </p>

          <h1 className="animate-fade-in-up delay-2 mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-6xl">
            I build scalable{" "}
            <span className="text-primary">web and mobile</span> applications
            that deliver real business value.
          </h1>

          <p className="animate-fade-in-up delay-3 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I specialize in building custom software solutions that simplify
            complex business processes, improve productivity, and support
            long-term growth.
          </p>

          <HeroActions />
        </div>

        {/* Right */}
        <div className="relative flex flex-1 items-center justify-center lg:py-16">
          {/* Glow behind the snippet */}
          <div className="absolute -inset-4 animate-sweep rounded-3xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-2xl" />

          <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-muted">ghelonico -- zsh</span>
            </div>

            {/* Body */}
            <div className="space-y-2 p-5 font-mono text-sm">
              <div>
                <span className="text-green-400">❯</span>{" "}
                <span className="text-blue-400">cat</span>{" "}
                <span className="text-yellow-400">profile.json</span>
              </div>

              <div className="space-y-1.5 pl-4 text-sm">
                <div>
                  <span className="text-purple-400">&quot;name&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">
                    &quot;Ghelonico Maligaya&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">&quot;role&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">
                    &quot;Programmer / Full Stack Developer&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">&quot;location&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">
                    &quot;Philippines&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">&quot;email&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">
                    &quot;ghelonico.maligaya@gmail.com&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">
                    &quot;experience&quot;
                  </span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">&quot;6+ years&quot;</span>
                </div>
                <div>
                  <span className="text-purple-400">&quot;stack&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-400">[</span>
                </div>
                <div className="pl-4 text-green-400">
                  &quot;React&quot;, &quot;Node.js&quot;, &quot;React
                  Native&quot;,
                </div>
                <div className="pl-4 text-green-400">
                  &quot;Next.js&quot;, &quot;TypeScript&quot;,
                  &quot;PostgreSQL&quot;
                </div>
                <div>
                  <span className="text-green-400">]</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-green-400">❯</span>{" "}
                <span className="animate-pulse text-text">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Projects ────── */}
      <section
        id="projects"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Things I&apos;ve built.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="animate-fade-in-up group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold text-text">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ────── About ────── */}
      <section
        id="about"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Turning complex problems into elegant, scalable solutions.
          </h2>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a full-stack developer with a passion for building
              software that makes a difference. With years of experience across
              web and mobile platforms, I focus on writing clean, maintainable
              code that delivers real business outcomes.
            </p>
            <p>
              My approach is simple: understand the problem deeply, design with
              the end-user in mind, and build systems that scale. I&apos;ve
              worked with startups and established companies alike, helping them
              streamline operations, launch products, and grow their digital
              presence.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open-source projects, or finding better ways to do
              things.
            </p>
          </div>
        </div>
      </section>

      {/* ────── Contact ────── */}
      <section
        id="contact"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Let&apos;s work together.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Whether you have a project in mind, a question about my work, or
            just want to say hello — I&apos;d love to hear from you.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="mailto:hello@ghelonico.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
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
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              hello@ghelonico.dev
            </a>

            <a
              href="https://github.com/ghelonico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary/50 hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
