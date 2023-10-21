import { projects } from '@/data/projects';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Desktop() {
  const [showProject, setShowProject] = useState(0);

  const handleMouseEnter = (index) => {
    setShowProject(index);
  };

  const handleMouseLeave = () => {
    setShowProject(0);
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
          <Image
            loading='lazy'
            src={project.src}
            width={672}
            height={501}
            alt={project.alt}
            className='aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch grow  rounded-lg'
          />
          {showProject === index && (
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
                {project?.behance && (
                  <Link
                    href={project.behance}
                    target='_blank'
                    className='hover:scale-105 transition-all ease-in'>
                    <Image
                      src='/behance-circle.svg'
                      width={30}
                      height={30}
                      alt='social media icon'
                    />
                  </Link>
                )}
                {project?.figma && (
                  <Link
                    href={project.figma}
                    target='_blank'
                    className='hover:scale-105 transition-all ease-in'>
                    <Image
                      src='/figma-circle.svg'
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
