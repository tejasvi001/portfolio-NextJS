export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  features: string[];
  category: 'web' | 'mobile' | 'desktop';
  completionDate: string;
}

export const projects: Project[] = [
 
  {
    id: 'yarpacom',
    title: 'Yarpacom',
    description: 'Real-time cleaning service booking platform using Flutter, NodeJS, MongoDB, Google Maps API, Firebase Auth, Stripe Payment Gateway, and more.',
    longDescription: 'A comprehensive cleaning service booking platform that connects customers with service providers in real-time. Features include location-based service matching, real-time tracking, secure payments, and service provider management.',
    image: '/projects/projectYarpacom.png',
    screenshots: [
      '/projects/yarpacom/1.jpg',
      '/projects/yarpacom/2.jpg',
      '/projects/yarpacom/3.jpg',
      '/projects/yarpacom/4.jpg',
      '/projects/yarpacom/5.jpg',
      '/projects/yarpacom/7.png',
      '/projects/yarpacom/8.png',
      '/projects/yarpacom/9.png',
      '/projects/yarpacom/10.png'
    ],
    technologies: ['Flutter', 'NodeJS', "Rest API", "Socket.io", "MongoDB", "Google Maps API", "Firebase", "Stripe", "GetX", "Google Play Console", "App Store Connect", "RBAC"],
    features: [
      'Real-time booking',
      'Location tracking',
      'Secure payments',
      'Service provider profiles',
      'Rating system'
    ],
    category: 'mobile',
    completionDate: '2024-02'
  },
  {
    id: 'lend-buddy',
    title: 'Lend Buddy',
    description: 'Full-featured lending platform with secure payments and inventory management. Built using Flutter, Spring Boot, MySQL, Firebase Auth, Swagger UI and more.',
    longDescription: 'A secure and user-friendly lending platform that facilitates peer-to-peer lending with comprehensive inventory management. Includes features for loan tracking, payment processing, and automated reminders.',
    image: '/projects/projectLendBuddy.png',
    screenshots: [
      '/projects/lend-buddy/screenshot1.jpg',
      '/projects/lend-buddy/screenshot2.jpg',
      '/projects/lend-buddy/screenshot3.jpg',
      '/projects/lend-buddy/screenshot4.jpg',
      '/projects/lend-buddy/screenshot5.jpg',
      '/projects/lend-buddy/screenshot6.jpg'
    ],
    technologies: ['Flutter', 'Spring Boot', 'MySQL', 'JWT', 'Swagger UI',"GetX"],
    features: [
      'Loan management',
      'Inventory tracking',
      'Payment processing',
      'User authentication',
      'Automated reminders'
    ],
    category: 'mobile',
    completionDate: '2024-01'
  },
  {
    id: 'pine-berry',
    title: 'Pine Berry',
    description: 'E-commerce website for selling products online. Built using Android Studio, Firebase Auth, Firebase Firestore, java, XML, Google Maps API and more.',
    longDescription: 'A feature-rich e-commerce platform for online product sales. Includes product catalog management, shopping cart functionality, secure checkout, and order tracking capabilities.',
    image: '/projects/projectPineBerry.png',
    screenshots: [
      '/projects/pine-berry/1.jpg',
      '/projects/pine-berry/2.jpg',
      '/projects/pine-berry/3.jpg',
      '/projects/pine-berry/4.jpg',
      '/projects/pine-berry/5.jpg',
      '/projects/pine-berry/6.jpg',
      '/projects/pine-berry/7.jpg',
      '/projects/pine-berry/8.jpg',
      '/projects/pine-berry/9.jpg',
      
    ],
    technologies: ['Android Studio', 'Java', 'Firebase', 'Google Maps API', 'XML', "Stripe"],
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Order tracking',
      'User reviews'
    ],
    category: 'mobile',
    completionDate: '2023-12'
  },
  {
    id: 'metro-app',
    title: 'Metro Navigation App',
    description: 'Interactive metro navigation application with real-time updates, route planning, and fare calculation.',
    longDescription: 'A comprehensive metro navigation solution that helps users plan their journeys efficiently. Features include interactive maps, real-time train schedules, optimal route suggestions, fare calculations, and station information.',
    image: '/projects/projectMetro.png',
    screenshots: [
      '/projects/metro-app/1.png',
      '/projects/metro-app/2.png',
      '/projects/metro-app/3.png'
    ],
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Google Maps API'],
    features: [
      'Interactive metro map',
      'Real-time train tracking',
      'Optimal route planning',
      'Fare calculator',
      'Station information'
    ],
    category: 'mobile',
    completionDate: '2023-11'
  },
  
  {
    id: 'subscription-manager',
    title: 'Subscription Manager',
    description: 'All-in-one subscription tracking and management application to monitor recurring expenses.',
    longDescription: 'A comprehensive tool for tracking and managing all your subscriptions in one place. The application helps users monitor their recurring expenses, receive payment reminders, and analyze spending patterns to optimize costs.',
    image: '/projects/projectSubscription.png',
    screenshots: [
      '/projects/subscription-manager/dashboard.jpg',
      '/projects/subscription-manager/image.png',
      '/projects/subscription-manager/image2.png'
    ],
    technologies: ['C++',"CURL","JSON","MYSQL"],
    features: [
      'Subscription dashboard',
      'Payment reminders',
      'Spending analytics',
      'Budget planning',
      'Cancellation tracking'
    ],
    category: 'web',
    completionDate: '2023-10'
  },
  {
    id: 'time-tracker',
    title: 'Time Tracker',
    description: 'Time tracking application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.',
    longDescription: 'A time tracking application that helps users track their time spent on projects. Built with Next.js 14, TypeScript, and Tailwind CSS for styling. Features smooth animations with Framer Motion and a dark/light theme toggle.',
    image: '/projects/projectTimeTracker.png',
    screenshots: [
      
    ],
    technologies: ['ReactJS',"Local Storage","JSON","MYSQL", "Tailwind CSS", "Web extensions"],
    features: [
      'Responsive design',
      'Dark/light theme',
      'Smooth animations',
      'Project showcase',
      'Contact form'
    ],
    category: 'web',
    completionDate: '2024-03'
  }
]; 