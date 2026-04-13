"use client";

import { education } from "@/data";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

export default function EducationSection() {
  return (
    <section id="education" className="pt-10 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl font-bold text-bordeaux mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-pastel/40 flex items-center justify-center">
                  <FiBookOpen className="text-amaranth" size={18} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-serif font-semibold text-bordeaux text-lg">
                    {edu.school}
                  </h3>
                  <span className="text-sm font-medium text-amaranth/80 flex-shrink-0">
                    {edu.date}
                  </span>
                </div>

                <p className="text-bordeaux/70 text-[15px] mb-1">
                  {edu.degree}
                  {edu.gpa && (
                    <span className="ml-2 text-strawberry font-medium">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </p>

                {edu.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {edu.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-bordeaux/70 leading-relaxed text-[15px] flex items-start gap-2"
                      >
                        <span className="text-strawberry mt-1.5 text-xs">●</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
