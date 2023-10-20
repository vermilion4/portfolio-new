import React, { useEffect, useState } from 'react';
import Desktop from "@/components/projects/Desktop";
import Mobile from "@/components/projects/Mobile";

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
    <section className="pt-48 max-w-7xl mx-auto">
      <div className="flex flex-col px-5">
        <div className="text-white text-lg font-bold tracking-wide">
          Project Showcase
        </div>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </section>
  );
}
 
export default Projects;
