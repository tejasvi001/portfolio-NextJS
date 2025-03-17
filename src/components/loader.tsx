import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
        <span className="inline-block animate-text-slide-up">Tejasvi</span>
        <span className="inline-block animate-text-slide-up animation-delay-600">&nbsp;Vermani</span>
      </h1>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
    </div>
  );
}
