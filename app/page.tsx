import HeroActions from "./components/HeroActions";
import techCategories from "../data/tech-stack";
import profile from "../data/profile";
import TechIcon from "./components/TechIcon";
import experience from "../data/experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* ────── Hero ────── */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center px-6 sm:px-10 lg:flex-row lg:px-16"
      >
        {/* Left */}
        <div className="flex flex-1 flex-col justify-center py-10 lg:py-24">
          <p className="animate-fade-in-up delay-1 text-base font-medium uppercase tracking-widest text-primary sm:text-lg">
            {profile.role}
          </p>

          <h1 className="animate-fade-in-up delay-2 mt-6 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-6xl">
            I build{" "}
            <span className="text-primary">
              web, desktop <br className="hidden sm:block" />
              and mobile
            </span>{" "}
            applications that deliver real business value.
          </h1>

          <p className="animate-fade-in-up delay-3 mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.description}
          </p>

          <HeroActions />
        </div>

        {/* Right */}
        <div className="relative flex flex-1 items-center justify-center pb-8 lg:py-16">
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
            <div className="space-y-2 p-4 font-mono text-xs sm:p-5 sm:text-sm">
              <div>
                <span className="text-green-500">❯</span>{" "}
                <span className="text-blue-500">cat</span>{" "}
                <span className="text-yellow-500">profile.json</span>
              </div>

              <div className="space-y-1 pl-3 text-xs sm:pl-4 sm:text-sm">
                <div>
                  <span className="text-purple-500">&quot;name&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">
                    &quot;{profile.name}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-500">&quot;role&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">
                    &quot;{profile.role}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-500">&quot;location&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">
                    &quot;{profile.location}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-500">&quot;email&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">
                    &quot;{profile.email}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-500">
                    &quot;experience&quot;
                  </span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">
                    &quot;{profile.experience}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-purple-500">&quot;expertise&quot;</span>{" "}
                  <span className="text-muted">:</span>{" "}
                  <span className="text-green-500">[</span>
                </div>
                {profile.expertise.map((item, i) => (
                  <div key={item} className="pl-3 text-green-500 sm:pl-4">
                    &quot;{item}&quot;
                    {i < profile.expertise.length - 1 ? "," : ""}
                  </div>
                ))}
                <div>
                  <span className="text-green-500">]</span>
                </div>
              </div>

              <div className="pt-0 sm:pt-1">
                <span className="text-green-500">❯</span>{" "}
                <span className="animate-pulse text-text">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Projects ────── */}
      <section
        id="projects"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-10 sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-base font-medium uppercase tracking-widest text-primary sm:text-lg">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
                Featured <span className="text-primary">Work</span>
              </h2>
            </div>
            <a
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary/50 hover:text-primary"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              View all projects
            </a>
          </div>

          <FeaturedProjects />
        </div>
      </section>

      {/* ────── Tech Stack ────── */}
      <section
        id="tech-stack"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-10 sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-base font-medium uppercase tracking-widest text-primary sm:text-lg">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            My <span className="text-primary">Tech Stack</span>
          </h2>

          <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10">
            {techCategories.map((category) => (
              <div key={category.label}>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-text">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${category.color}`}
                  />
                  {category.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary/30 hover:text-text"
                    >
                      <TechIcon name={item} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── About ────── */}
      <section
        id="about"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-10 sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-base font-medium uppercase tracking-widest text-primary sm:text-lg">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Turning complex problems into{" "}
            <span className="text-primary">elegant, scalable</span> solutions.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:mt-10 sm:text-lg">
            <p>
              I&apos;m a full-stack developer with a passion for building
              software that makes a difference. With years of experience across
              web, mobile, and desktop platforms, I focus on writing clean,
              maintainable code that delivers real business outcomes.
            </p>
            <p>
              My approach is simple: understand the problem deeply, design with
              the end-user in mind, and build systems that scale. I&apos;ve
              worked with startups and established companies alike, helping them
              streamline operations, launch products, and grow their digital
              presence.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-10 sm:mt-12">
            <h3 className="text-lg font-semibold text-text">
              Professional Journey
            </h3>

            <div className="mt-4 space-y-0 sm:mt-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-4 pb-6 last:pb-0 sm:gap-6 sm:pb-10"
                >
                  {/* Timeline line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-[9px] top-3 h-full w-px bg-border sm:left-[11px] sm:top-4" />
                  )}

                  {/* Timeline dot */}
                  <div className="relative flex h-5 w-5 shrink-0 items-center justify-center sm:h-6 sm:w-6">
                    <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:h-3 sm:w-3" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0">
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-sm font-semibold text-text sm:text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-medium text-primary sm:text-sm">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted sm:gap-2 sm:text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{exp.period}</span>
                        <span className="text-border">|</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── Contact ────── */}
      <section
        id="contact"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-10 sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-medium uppercase tracking-widest text-primary sm:text-lg">
            Get in Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Let&apos;s <span className="text-primary">work together</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Whether you have a project in mind, a question about my work, or
            just want to say hello — I&apos;d love to hear from you.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={`mailto:${profile.email}`}
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
              {profile.email}
            </a>

            <a
              href={profile.github}
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
