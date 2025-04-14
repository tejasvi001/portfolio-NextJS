import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Code, LucideIcon } from "lucide-react";

// Define the type for each statistic
type StatItem = {
  id: number;
  title: string;
  value: number;
  icon: LucideIcon;
};

// Data for the statistics section
const stats: StatItem[] = [
  {
    id: 1,
    title: "PROBLEMS SOLVED ON LEETCODE AND CODECHEF",
    value: 530,
    icon: Code,
  },
  {
    id: 2,
    title: "YEARS OF CODING",
    value: 5,
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "TOTAL TEAMS",
    value: 20,
    icon: Users,
  },
  {
    id: 4,
    title: "PROJECTS MADE",
    value: 25,
    icon: Award,
  },
];

// Props for the animated counter
type AnimatedCounterProps = {
  value: number;
  duration?: number;
};

// Animated number counter component
function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // Reset count when component mounts
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * value));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return <span>{count}</span>;
}

// Main statistics section component
export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-600/10 to-transparent">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600/10">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
