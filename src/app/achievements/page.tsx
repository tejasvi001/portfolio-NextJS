"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const achievements = [
  {
    id: 1,
    title: "Open Source Contributions",
    description: "Contributed to several open-source projects, improving documentation and fixing bugs.",
    year: "2023",
    image: "/achievements/opensource.jpg",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    description: "First place in regional hackathon for innovative solution in healthcare technology.",
    year: "2023",
    image: "/achievements/hackathon.jpg",
  },
  {
    id: 3,
    title: "Tech Blog Recognition",
    description: "Featured articles on popular tech blogs reaching over 10,000 developers.",
    year: "2022",
    image: "/achievements/blog.jpg",
  },
  {
    id: 4,
    title: "Community Leadership",
    description: "Led local developer community meetups and organized workshops.",
    year: "2022",
    image: "/achievements/community.jpg",
  },
  {
    id: 5,
    title: "Full Stack Certification",
    description: "Completed advanced certification in Full Stack Development from a renowned institution.",
    year: "2023",
    image: "/achievements/certification.jpg",
  },
  {
    id: 6,
    title: "Project Recognition",
    description: "Developed an innovative solution that was featured in tech conferences.",
    year: "2023",
    image: "/achievements/project.jpg",
  },
  {
    id: 7,
    title: "Research Publication",
    description: "Published research paper on modern web development technologies.",
    year: "2022",
    image: "/achievements/research.jpg",
  },
  {
    id: 8,
    title: "Industry Award",
    description: "Received recognition for outstanding contributions to tech community.",
    year: "2023",
    image: "/achievements/award.jpg",
  },
  {
    id: 9,
    title: "Mentorship Impact",
    description: "Successfully mentored 20+ developers in their career journey.",
    year: "2023",
    image: "/achievements/mentorship.jpg",
  },
];

export default function AchievementsPage() {
  return (
    <div className="content-wrapper">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-content text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 