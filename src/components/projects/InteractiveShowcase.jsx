import React, { useState, useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import CustomImage from '@/components/shared/CustomImage';

export default function InteractiveShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeSectionRef = useRef(null);

  const handleProjectSelect = (project) => {
    setIsLoading(true);
    setSelectedProject(project);
    setIframeKey(prev => prev + 1); // Force iframe reload
    
    // Smooth scroll to iframe section after a brief delay
    setTimeout(() => {
      if (iframeSectionRef.current) {
        iframeSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full mt-12">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-[0.54px] text-white mb-4">
          Interactive Project Demo
        </h2>
        <p className="text-gray-400 tracking-[0.42px] max-w-2xl mx-auto">
          Experience my projects firsthand. Select a project below to interact with it directly in your browser.
        </p>
      </div>

      {/* Project Selection Grid */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const isSelected = selectedProject?.title === project.title;
          return (
            <div
              key={index}
              onClick={() => handleProjectSelect(project)}
              className={`
                relative group cursor-pointer transition-all duration-300 ease-in-out
                bg-white bg-opacity-[8%] rounded-lg p-4
                ${isSelected 
                  ? 'border border-red-500 bg-opacity-[15%]' 
                  : 'border border-transparent hover:border-red-500 hover:bg-opacity-[12%] hover:scale-105'
                }
              `}
            >
            {/* Project Image */}
            <div className="relative mb-3 overflow-hidden rounded-lg">
              <CustomImage
                src={project.src}
                width={300}
                height={200}
                alt={project.alt}
                className="object-cover object-center w-full h-32 transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                <div className="text-center text-white">
                  <div className="w-8 h-8 mx-auto mb-2">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Launch Demo</span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h3 className="font-bold text-white tracking-[0.48px] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 tracking-[0.42px] line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Selection Indicator */}
            {isSelected && (
              <div className="absolute w-3 h-3 bg-red-500 rounded-full top-2 right-2 animate-pulse"></div>
            )}
          </div>
        );
        })}
      </div>

      {/* Interactive Iframe Section */}
      {selectedProject && (
        <div className="relative" ref={iframeSectionRef}>
          {/* Header */}
          <div className="relative mb-4 p-4 bg-white bg-opacity-[8%] rounded-lg border border-red-500 border-opacity-30">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute p-2 text-gray-400 transition-colors duration-200 top-4 right-4 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>

            <div className='pr-12'>
              <h3 className="text-xl font-bold text-white tracking-[0.48px]">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-400 tracking-[0.42px] mt-1">
                {selectedProject.description}
              </p>
            </div>

            <div className="mt-4">
              <a
                href={selectedProject.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Open Full Site
              </a>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="relative overflow-hidden bg-white border border-red-500 rounded-lg border-opacity-30">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-red-500 animate-spin" fill="currentColor" viewBox="0 0 100 101">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                  </div>
                  <p className="text-white text-sm tracking-[0.42px]">Loading {selectedProject.title}...</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              key={iframeKey}
              src={selectedProject.preview}
              className="w-full h-[600px] border-0"
              title={`${selectedProject.title} Demo`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>

          {/* Instructions */}
          <div className="mt-4 p-4 bg-white bg-opacity-[5%] rounded-lg border border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium tracking-[0.42px] mb-1">
                  Interactive Demo Instructions
                </h4>
                <p className="text-sm text-gray-400 tracking-[0.42px]">
                  You can now interact with {selectedProject.title} directly in this window. 
                  Use the controls above to open the full site in a new tab or close this demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!selectedProject && (
        <div className="py-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-600">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h3 className="text-white font-medium tracking-[0.48px] mb-2">
            Select a Project to Demo
          </h3>
          <p className="text-gray-400 tracking-[0.42px] max-w-md mx-auto">
            Choose any project from the grid above to start an interactive demo session.
          </p>
        </div>
      )}
    </div>
  );
} 