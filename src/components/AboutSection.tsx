"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          <div className="flex-shrink-0">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg ring-4 ring-pastel/30">
              <Image
                src="/profile.png"
                alt="Hong Yi Zhang"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 35%" }}
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bordeaux mb-5">
              About Me
            </h2>
            <p className="text-bordeaux/70 leading-relaxed text-lg mb-5">
              I&apos;m an Electrical &amp; Computer Engineering student at Olin
              College who loves doing cool stuff :D
            </p>
            <p className="text-bordeaux/70 leading-relaxed text-lg">
              When I&apos;m not coding, you&apos;ll find me taking photos,
              going on a new adventure, or going to the gym!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
