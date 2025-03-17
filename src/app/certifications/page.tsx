"use client";

import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { certifications, Certification } from "./certifications-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Calendar,
  Building2,
  Tag,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificationSlider } from "@/components/CertificationSlider";

type CategoryType = 'All' | Certification['category'];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryType[] = ['All', 'Technical', 'Professional', 'Academic'];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="container py-12 md:py-20 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Achievements</h1>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            A showcase of my professional certifications, academic achievements, and technical accomplishments. 
            Each certification represents a milestone in my journey of continuous learning and growth.
          </p>
        </div>

        {/* Certification Slider */}
        <div className="mb-16">
          <CertificationSlider />
        </div>

        {/* Filters Section */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search certifications..."
                className="w-full md:w-[300px] px-3 py-2 rounded-lg border bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredCertifications.map((cert) => (
            <Card key={cert.id} className="p-6 hover:shadow-lg transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className={cert.badgeColor}>
                    {cert.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground">{cert.description}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.skills && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      {cert.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 mt-2"
                  >
                    View Certificate
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No certifications found matching your criteria.</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
} 