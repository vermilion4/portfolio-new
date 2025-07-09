import React, { useEffect, useState } from 'react';
import Desktop from "@/components/projects/Desktop";
import Mobile from "@/components/projects/Mobile";
import InteractiveShowcase from "@/components/projects/InteractiveShowcase";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    checkIsMobile(); // Check initially
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return ( 
    <section className="px-5 pt-24 sm:px-10">
      <div className="flex flex-col mx-auto max-w-7xl">
        {/* <div className="text-white text-lg font-bold tracking-[0.54px]">
          Project Showcase
        </div>
        {isMobile ? <Mobile /> : <Desktop />} */}
        
        {/* Interactive Demo Section */}
        <InteractiveShowcase />
      </div>
    </section>
  );
}
 
export default Projects;
