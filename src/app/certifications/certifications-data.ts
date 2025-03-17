export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
  badgeColor?: string;
  category: 'Technical' | 'Professional' | 'Academic';
  skills?: string[];
  isHighlight?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "gold-medal",
    title: "Gold Medal",
    issuer: "Chitkara University",
    date: "September 2024",
    description: "Awarded Gold Medal for outstanding academic performance in Bachelor of Computer Applications with CGPA 9.91/10",
    image: "/assets/img/certifications/2.jpg",
    category: "Academic",
    badgeColor: "bg-yellow-500/10 text-yellow-500",
    isHighlight: true
  },
  {
    id: "award-of-excellence",
    title: "Award of Excellence",
    issuer: "Chitkara University",
    date: "September 2024",
    description: "Awarded Award of Excellence for outstanding academic performance in Bachelor of Computer Applications with CGPA 9.91/10",
    image: "/assets/img/certifications/g.jpg",
    category: "Academic",
    badgeColor: "bg-yellow-500/10 text-yellow-500",
    isHighlight: true
  },
  {
    id: "internship",
    title: "Internship",
    issuer: "Kreativan Technologies",
    date: "June 2024",
    description: "Completed Internship at Kreativan Technologies",
    image: "/assets/img/certifications/f.jpg",
    category: "Professional",
    badgeColor: "bg-yellow-500/10 text-yellow-500",
    isHighlight: true
  },
  {
    id: "length-measuring-pen",
    title: "Patent - Length Measuring Pen",
    issuer: "Patent Office, Government of India",
    date: " Februrary 2023",
    description: "Patent granted for innovative Length Measuring Pen design",
    image: "/assets/img/certifications/lenghthmeasuringpen.jpg",
    category: "Technical",
    badgeColor: "bg-red-500/10 text-red-500",
    skills: ["Innovation", "Product Design", "Technical Writing"],
    isHighlight: true
  },
  {
    id: "non-reusable-bottle",
    title: "Patent - Non-Reusable Bottle",
    issuer: "Patent Office, Government of India",
    date: "March 2023",
    description: "Patent granted for innovative Non-Reusable Bottle design",
    image: "/assets/img/certifications/nonreusablebottle.jpg",
    category: "Technical",
    badgeColor: "bg-red-500/10 text-red-500",
    skills: ["Innovation", "Product Design", "Technical Writing"],
    isHighlight: true
  },
  {
    id: "iot-hackathon",
    title: "IoT Hackathon",
    issuer: "Chitkara University",
    date: " September 2022",
    description: "Secured Sixth Position in IoT-Based Hackathon",
    image: "/assets/img/certifications/3.jpg",
    category: "Technical",
    badgeColor: "bg-blue-500/10 text-blue-500",
    isHighlight: true
  },
  {
    id: "yamaha-hackathon",
    title: "AI based Hackathon",
    issuer: "YAMAHA",
    date: "April 2023",
    description: "Participated in AI-Based Hackathon",
    image: "/assets/img/certifications/academic2.png",
    category: "Technical",
    badgeColor: "bg-blue-500/10 text-blue-500",
    isHighlight: true
  },
  {
    id: "flutter-dev",
    title: "Flutter Development",
    issuer: "Infosys Springboard",
    date: "May 2024",
    description: "Completed Flutter Development course",
    image: "/assets/img/certifications/i.png",
    category: "Technical",
    badgeColor: "bg-green-500/10 text-green-500",
    isHighlight: true
  },
  {
    id: "postman-api",
    title: "Postman API",
    issuer: "Postman",
    date: "July 2024",
    description: "Completed Postman API course",
    image: "/assets/img/certifications/j.png",
    category: "Technical",
    badgeColor: "bg-purple-500/10 text-purple-500",
    isHighlight: true
  },
  {
    id: "udemy-java",
    title: "Java Programming",
    issuer: "Udemy",
    date: "July 2024",
    description: "Completed Java Programming course",
    image: "/assets/img/certifications/k.png",
    category: "Technical",
    badgeColor: "bg-orange-500/10 text-orange-500",
    isHighlight: true
  },
  {
    id: "infy-android",
    title: "Android Development",
    issuer: "Infosys Springboard",
    date: "Februrary 2024",
    description: "Completed Android Development course",
    image: "/assets/img/certifications/h.png",
    category: "Technical",
    badgeColor: "bg-indigo-500/10 text-indigo-500",
    skills: ["Android", "Problem Solving", "Java", "XML", "Kotlin"],
    isHighlight: true
  },
  {
    id: "infosys-python",
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "June 2023",
    description: "Completed advanced Python programming certification from Infosys Springboard",
    image: "/assets/img/certifications/infypython.png",
    category: "Technical",
    badgeColor: "bg-blue-500/10 text-blue-500",
    skills: ["Python", "Programming", "Problem Solving"],
    isHighlight: true
  },
  {
    id: "udemy-ciscoPacketTracer",
    title: "Cisco Packet Tracer",
    issuer: "Udemy",
    date: "July 2022",
    description: "Completed comprehensive Cisco Packet Tracer course",
    image: "/assets/img/certifications/udemy1.jpg",
    category: "Technical",
    badgeColor: "bg-purple-500/10 text-purple-500",
    skills: ["Networking", "Cisco Packet Tracer", "CCNA"],
    link: "",
    isHighlight: true,
  },
  {
    id: "udemy-sql",
    title: "DatabaseSQL",
    issuer: "Udemy",
    date: "July 2023",
    description: "Completed comprehensive SQL course",
    image: "/assets/img/certifications/udemy2.jpg",
    category: "Technical",
    badgeColor: "bg-green-500/10 text-green-500",
    skills: ["SQL", "Database", "MySQL"],
    link: "",
    isHighlight: true,
  },
  {
    id: "cricket",
    title: "Inter-University Cricket Tournament",
    issuer: "Chitkara University",
    date: "October 2023",
    description: "Winner at Inter-University Cricket Tournament",
    image: "/assets/img/certifications/academic1.jpg",
    category: "Professional",
    badgeColor: "bg-emerald-500/10 text-emerald-500",
    skills: ["Team Work", "Leadership", "Sports"],
    isHighlight: true
  },
  {
    id: "cisco-cs",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "October 2023",
    description: "Completed Cybersecurity Essentials course",
    image: "/assets/img/certifications/l.png",
    category: "Technical",
    badgeColor: "bg-emerald-500/10 text-emerald-500",
    skills: ["Cybersecurity", "Networking", "Cisco Packet Tracer"],
    isHighlight: true
  },
  {
    id: "nss",
    title: "National Service Scheme",
    issuer: "JNV Nahan",
    date: "December 2019",
    description: "Completed National Service Scheme course",
    image: "/assets/img/certifications/a.jpg",
    category: "Professional",
    badgeColor: "bg-emerald-500/10 text-emerald-500",
    skills: ["Leadership", "Team Work", "Social Service"],
    isHighlight: true
  },
  {
    id: "science-exhibition",
    title: "State LevelScience Exhibition",
    issuer: "Navodaya Vidyalaya Samiti, Himachal Pradesh",
    date: "October 2018",
    description: "Participated in State Level Science Exhibition",
    image: "/assets/img/certifications/e.jpg",
    category: "Academic",
    badgeColor: "bg-yellow-500/10 text-yellow-500",
    isHighlight: true
  },
]; 