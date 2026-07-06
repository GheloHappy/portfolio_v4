"use client";

import { useState } from "react";
import { featuredProjects } from "../../data/projects";
import TechIcon from "./TechIcon";
import ImageGallery from "./ImageGallery";

export default function FeaturedProjects() {
  const [gallery, setGallery] = useState<{
    images: string[];
    title: string;
    index: number;
  } | null>(null);

  return (
    <>
      <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className={`animate-fade-in-up group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-primary/50 ${
              project.images.length > 0 ? "cursor-pointer" : ""
            }`}
            style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            onClick={() => {
              if (project.images.length > 0) {
                setGallery({
                  images: project.images,
                  title: project.title,
                  index: 0,
                });
              }
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-32 w-full object-cover sm:h-40"
              />
            ) : (
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10 sm:h-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="h-12 w-12 text-muted/40"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
            )}

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-base font-semibold text-text sm:text-lg">
                {project.title}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary sm:text-xs"
                  >
                    <TechIcon name={tag} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary-hover sm:text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 21 3" />
                    </svg>
                  </a>
                )}

                {project.apk && (
                  <a
                    href={project.apk}
                    download="tyew.apk"
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary transition-colors hover:bg-primary/20 sm:text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download APK
                  </a>
                )}

                {project.images.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setGallery({
                        images: project.images,
                        title: project.title,
                        index: 0,
                      });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-text sm:text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    Gallery
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {gallery && (
        <ImageGallery
          images={gallery.images}
          title={gallery.title}
          currentIndex={gallery.index}
          onClose={() => setGallery(null)}
          onPrev={() =>
            setGallery((g) =>
              g
                ? {
                    ...g,
                    index: g.index === 0 ? g.images.length - 1 : g.index - 1,
                  }
                : null,
            )
          }
          onNext={() =>
            setGallery((g) =>
              g
                ? {
                    ...g,
                    index: g.index === g.images.length - 1 ? 0 : g.index + 1,
                  }
                : null,
            )
          }
        />
      )}
    </>
  );
}
