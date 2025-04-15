"use client";

import { PageTransition } from "@/components/page-transition";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Code2,
  Cloud,
  Terminal,
  LucideIcon
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/tejasvi-vermani",
    color: "hover:text-[#0077B5]"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/tejasvi6039",
    color: "hover:text-[#1DA1F2]"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/tejasvi001",
    color: "hover:text-[#333]"
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/tejasvi_001",
    color: "hover:text-[#FFA116]"
  },
  {
    name: "CodeChef",
    icon: Terminal,
    url: "https://www.codechef.com/users/tejasvi001",
    color: "hover:text-[#5B4638]"
  },
  {
    name: "HackerRank",
    icon: Terminal,
    url: "https://www.hackerrank.com/vermanitejasvi",
    color: "hover:text-[#2EC866]"
  },
  {
    name: "Codolio",
    icon: Code2,
    url: "https://codolio.com/profile/tejasvi_001",
    color: "hover:text-primary"
  },
  {
    name: "Google Cloud",
    icon: Cloud,
    url: "https://www.cloudskillsboost.google/public_profiles/bcc28920-9ac1-4df0-9f9f-1a824d7787",
    color: "hover:text-[#4285F4]"
  }
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-12 lg:px-24 pt-24 pb-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Hey There, Got a project, job offer or consulting work for me? Feel free to contact me ASAP.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Left Column: Contact Info & Social Links */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Himachal Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:vermanitejasvi@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      vermanitejasvi@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <link.icon className={`w-6 h-6 transition-colors ${link.color}`} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column: Contact Form */}
            <Card className="lg:col-span-3 p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 