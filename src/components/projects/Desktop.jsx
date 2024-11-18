import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Desktop() {
  const [showProject, setShowProject] = useState(0);
  const [initialOverlay, setShowInitialOverlay] = useState(false);
  const [showLoader, setShowLoader] = useState(true)

  const handleMouseEnter = (index) => {
    setShowProject(index);
    setShowInitialOverlay(true)
  };

  const handleMouseLeave = () => {
    setShowProject(0);
    setShowInitialOverlay(false)
  };

  return (
    <div className='justify-center items-center flex w-full gap-2 mt-6 pl-0.5 max-md:max-w-full'>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`relative self-stretch overflow-hidden flex flex-col w-[146px] h-[501px] max-md:max-w-full transition-all ease-in-out duration-500 ${
            showProject === index ? 'w-[672px]' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}>
            <div className='h-full absolute inset-0 w-full' style={{ display: showLoader ? "block" : "none" }}>
            <div role="status" className='grid place-content-center h-full'>
              <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-600 animate-spin fill-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <Image
            loading='lazy'
            src={project.src}
            width={672}
            height={501}
            alt={project.alt}
            className='bg-white bg-opacity-25 aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch grow  rounded-lg'
            onLoad={() => setShowLoader(false)} // This triggers when the image has loaded
          />
          {showProject === index && initialOverlay && (
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 transition-all duration-500 grid place-content-center text-center text-white rounded-lg ease-in-out'>
              {/* Add project details here */}
              <div
                className={`w-2/3 mx-auto ${
                  index === projects.length - 1 && 'w-full'
                } `}>
                <p className='font-bold tracking-[0.48px] pb-2'>
                  {project.title}
                </p>
                <p className='text-sm animate-fade delay-500 leading-6 tracking-[0.42px] '>
                  {project.description}
                </p>
              </div>
              <div className='absolute bottom-5 right-5 flex gap-3 items-center'>
                {project?.preview && (
                  <Link
                    href={project.preview}
                    target='_blank'
                    className='hover:scale-105 transition-all ease-in'>
                    <Image
                      src='/preview.svg'
                      width={30}
                      height={30}
                      alt='social media icon'
                    />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
