"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SkillsSection } from "@/components/skills-section";
import { StatisticsSection } from "@/components/statistics-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="content-wrapper text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m Tejasvi Vermani
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Java Developers wear glasses, cuz they can&apos;t C#
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      
      <StatisticsSection />

      <div className="content-wrapper">
        {/* About Preview */}
        <motion.section 
          className="py-20 border-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              With around 2 years of experience in full-stack development, I specialize in
              building scalable web and mobile applications using modern technologies.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </motion.section>

        {/* Projects Preview */}
        <motion.section 
          className="py-20 border-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Yarpacom",
                  description: "Real-time cleaning service booking platform using Flutter, NodeJS, MongoDB, Google Maps API, Firebase Auth, Stripe Payment Gateway, and more.",
                  image: "/projects/projectYarpacom.png"
                },
                {
                  title: "Lend Buddy",
                  description: "Full-featured lending platform with secure payments and inventory management. Built using Flutter, Spring Boot, MySQL, Firebase Auth, Swagger UI and more.",
                  image: "/projects/projectLendBuddy.png"
                },
                {
                  title: "Pine Berry",
                  description: "E-commerce website for selling products online. Built using Android Studio, Firebase Auth, Firebase Firestore, java, XML, Google Maps API and more.",
                  image: "/projects/projectPineBerry.png"
                }
              ].map((project) => (
                <div key={project.title} className="group bg-card hover:bg-card/80 p-6 rounded-lg border transition-colors">
                  <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </motion.section>

        {/* Skills Preview */}
        <SkillsSection />

        {/* Certifications Preview */}
        <motion.section 
          className="py-20 border-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Professional Certifications</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Browse through my professional certifications from industry leaders like
              Postman, Infosys Springboard, Cisco Networking Academy and more.
            </p>
            <Button asChild variant="outline">
              <Link href="/certifications">View All Certifications</Link>
            </Button>
          </div>
        </motion.section>

        {/* Contact Preview */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Hey There, Got a project, job offer or consulting work for me?
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
