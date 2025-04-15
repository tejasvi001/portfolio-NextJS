"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BookOpen, 
  Code2, 
  Database, 
  Trophy, 
  Heart,
  GraduationCap,
  Layers,
  Cloud,
  Plus
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutContent() {
  return (
    <div className="container py-12 md:py-24 max-w-5xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-block p-2 px-3 mb-4 rounded-full bg-primary/10 text-primary">
          
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-muted-foreground text-lg max-w-[700px] leading-relaxed">
          I&apos;m a Java Full Stack Developer with a passion for building robust and scalable applications. 
          I combine technical expertise with a strong academic background to deliver efficient solutions.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {/* Education Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          <div className="grid gap-6">
          
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <p className="text-muted-foreground mb-3">Kreativan Technologies, Chandigarh India</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
              • Contributed to the development of key features for the Mobile and Web Applications using Flutter, GetX, MongoDB, Spring Boot, and JWT, integrating and creating Restful Apis and Socket.IO leading to improved app functionality. 
              <br />
              • Mentored 10+ interns for application development using Android Studio, Java, Spring Boot, Flutter, GetX, Hive, and Firebase, driving development efficiency.
              <br />
               • Integrated Maps Support for accurate location tracking and Stripe Payment Gateway for secure payments. 
               <br />
               • Deployed real-time applications to Google Play Console and Apple App Store to be used by over 1000 users.
              </div>
            </Card>
            
            
          </div>
        </section>
        <section>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="grid gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Masters of Computer Applications (MCA)</h3>
              <p className="text-muted-foreground mb-3">Chandigarh University, Punjab</p>
    
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-muted-foreground mb-3">Chitkara University, Himachal Pradesh</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                Award of Academic Excellence (CGPA: 9.91/10)
                <br />
                Gold Medalist
                <br />
                Two Patents Granted for Length Measuring Pen and
                Non-Reusable Bottle
                <br />
                Sixth Position in IoT-Based Hackathon 
                <br />
                Winner at Inter-University Cricket Tournament
              </div>
            </Card>
            
            
          </div>
        </section>

        {/* Technical Skills Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "Java", "Dart", "SQL", "JavaScript", "Python", "PHP"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Plus className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Frameworks and Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "ReactJS", "jQuery", "Flutter", "GetX", "Bloc"].map((framework) => (
                  <span key={framework} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {framework}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Google Firebase", "Hive", "MySQL", "SQLite", "MongoDB", "PostgreSQL"].map((db) => (
                  <span key={db} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {db}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["DBMS", "OS", "CN", "DSA", "SDLC", "Linux"].map((concept) => (
                  <span key={concept} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {concept}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Postman", "JIRA", "Apache JMeter", "Figma", "Swagger UI", "Android Studio", "DBeaver", "Google Cloud Platform"].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
           
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Languages Known</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "German", "Punjabi"].map((language) => (
                  <span key={language} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="grid gap-4">
              {[
                "Gold Medalist - BCA 2024 Chitkara University in 2024",
                "Patent Granted for Length Measuring Pen in 2023", "Patent Granted for Non-Reusable Bottle in 2023",
                "Sixth Position in IoT-Based Hackathon held at Chitkara University in 2022",
                "Participated in AI based Hackathon organized by YAMAHA in 2023",
                "Attended Conference of Intellectual Property Rights Science and Technology organized by Govt. of India in April 2022",
                "Winner at Inter-University Cricket Tournament 2024",
                "NIMCET 2024 (All India Rank 1129)",
                "Qualified NDA 147 in 2021",
                "Qualified NA 109 in 2021",
                "Qualified TES 45 & TES 46 in 2020",
                "Attended NSS Camp at JNV NAHAN in 2019",
                "Participated at State Level Science Exhibition in 2018"
              ].map((achievement) => (
                <div key={achievement} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Interests & Hobbies Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
          </div>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m an avid traveler who has explored over 25 destinations in the past year. 
                My interests include reading books and playing cricket. I&apos;m particularly passionate 
                about studying Indian Defence systems and keeping up with developments in military 
                technology, including weapons and missile systems.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
} 