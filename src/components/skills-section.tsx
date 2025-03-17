"use client";

import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
    "Material-UI",
    "Redux",
  ],
  "Backend Development": [
    "Spring Boot",
    "Java",
    "oAuth",
    "JWT",
    "RBAC",
    "RESTful APIs",
    "GraphQL",
  ],
  "Database & Cloud": [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "AWS",
    "Firebase",
    "Github"
  ],
  "Mobile Development": [
    "Flutter",
    "Dart",
    "Firebase",
    "GetX",
    "Provider",
    "Socket.io",
    "Google Maps",
    "Stripe Payment Gateway",
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">{category}</h3>
              <div className="grid gap-2">
                {skillList.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="bg-background rounded-lg p-3 text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 