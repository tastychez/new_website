"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";

const GRADIENTS = [
  "linear-gradient(135deg, rgba(62,0,12,0.15), rgba(251,75,78,0.08), rgba(255,203,221,0.25))",
  "linear-gradient(135deg, rgba(124,11,43,0.12), rgba(255,203,221,0.18), rgba(255,249,245,0.9))",
  "linear-gradient(135deg, rgba(251,75,78,0.12), rgba(209,0,0,0.08), rgba(255,203,221,0.2))",
  "linear-gradient(135deg, rgba(255,203,221,0.25), rgba(251,75,78,0.08), rgba(62,0,12,0.1))",
  "linear-gradient(135deg, rgba(209,0,0,0.08), rgba(124,11,43,0.12), rgba(255,203,221,0.22))",
  "linear-gradient(135deg, rgba(62,0,12,0.08), rgba(255,203,221,0.2), rgba(251,75,78,0.12))",
];

// Row 1: landscape (3+3), Row 2: portrait/square (2+2+2), Row 3: landscape (2+2+2)
const COL_SPANS = [3, 3, 2, 2, 2, 2, 2, 2];

// Image height classes per index:
// Row 1 (0-1): wide images, medium-tall
// Row 2 (2-4): portrait/square images, extra tall to show full photo
// Row 3 (5-7): standard
const IMG_HEIGHTS = [
  "h-48 md:h-56",
  "h-48 md:h-56",
  "h-56 md:h-72",
  "h-56 md:h-72",
  "h-56 md:h-72",
  "h-40 md:h-48",
  "h-40 md:h-48",
  "h-40 md:h-48",
];

function ProjectImage({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const heightClass = IMG_HEIGHTS[index] ?? "h-40 md:h-48";

  if (!project.image || imgError) {
    return (
      <div
        className={`w-full rounded-t-2xl flex items-center justify-center overflow-hidden ${heightClass}`}
        style={{ background: gradient }}
      >
        <span className="font-serif text-2xl md:text-3xl font-bold text-bordeaux/20 select-none text-center px-4">
          {project.name.split("—")[0].trim()}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-t-2xl overflow-hidden relative ${heightClass}`}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        className={project.imageClassName ?? "object-cover"}
        style={project.imageStyle}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

function LinkIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-bordeaux/40 hover:text-strawberry transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}

const gridCSS = `
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
  }
  ${COL_SPANS.map((s, i) => `.bento-item-${i} { grid-column: span ${s}; }`).join("\n  ")}
}
`;

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-10 pb-24 px-6 bg-pastel/15">
      <style dangerouslySetInnerHTML={{ __html: gridCSS }} />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl font-bold text-bordeaux mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="bento-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bento-item-${i} group rounded-2xl bg-white/80 backdrop-blur-sm border border-pastel/40 hover:border-strawberry/30 transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(251,75,78,0.12)] flex flex-col`}
            >
              <ProjectImage project={project} index={i} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-bold text-lg text-bordeaux group-hover:text-strawberry transition-colors leading-snug">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0 ml-3 mt-0.5">
                    {project.github && (
                      <LinkIcon
                        href={project.github}
                        label={`${project.name} GitHub`}
                      >
                        <FiGithub size={17} />
                      </LinkIcon>
                    )}
                    {project.devpost && (
                      <LinkIcon
                        href={project.devpost}
                        label={`${project.name} Devpost`}
                      >
                        <SiDevpost size={17} />
                      </LinkIcon>
                    )}
                    {project.link && (
                      <LinkIcon
                        href={project.link}
                        label={`${project.name} Live`}
                      >
                        <FiExternalLink size={17} />
                      </LinkIcon>
                    )}
                  </div>
                </div>

                <p className="text-bordeaux/60 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-pastel/30 text-amaranth/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
