"use client";

import { useState } from "react";
import allProjects from "../../data/projects";
import TechIcon from "./TechIcon";
import ImageGallery from "./ImageGallery";

export default function AllProjects() {
  const [gallery, setGallery] = useState<{
    images: string[];
    title: string;
    index: number;
  } | null>(null);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8">
        {allProjects.map((project, index) => (
          <article
            key={project.title}
            className={`animate-fade-in-up group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-primary/50 ${
              project.images.length > 0 ? "cursor-pointer" : ""
            }`}
            style={{ animationDelay: `${0.05 + index * 0.05}s` }}
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
                className="h-48 w-full object-cover sm:h-48"
              />
            ) : (
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10 sm:h-48">
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

            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-semibold text-text">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    <TechIcon name={tag} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
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
                      className="h-3.5 w-3.5"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 21 3" />
                    </svg>
                  </a>
                )}

                {project.apk && (
                  <a
                    href={project.apk}
                    download
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
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
                      className="h-3.5 w-3.5"
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
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-text"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
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
