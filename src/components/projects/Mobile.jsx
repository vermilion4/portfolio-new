import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Mobile() {
  const [showProject, setShowProject] = useState(null);

  const handleMouseClick = (index) => {
    setShowProject(showProject === index ? null : index);
  };

  return (
    <div className=' flex flex-col justify-center w-full gap-4 mt-6'>
      {projects.map((project, index) => (
        <div key={index} className=''>
          <div
            className={`flex flex-col bg-white bg-opacity-[8%] py-4 px-[13px] rounded-lg transition-all duration-500 ease-in-out overflow-hidden ${
              showProject === index ? 'max-h-[1000px]' : 'max-h-16'
            } `}>
            <div className='flex items-center justify-between'>
              <p className='tracking-[0.42px]'>{project.title}</p>

              <div className='flex gap-3 items-center'>
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
                  <Link href={project.figma} target='_blank'>
                    <Image
                      src='/figma-circle.svg'
                      width={30}
                      height={30}
                      alt='social media icon'
                      className='hover:scale-105 transition-all ease-in'
                    />
                  </Link>
                )}

                <Image
                  src='/toggle.svg'
                  width={30}
                  height={30}
                  alt='toggle icon'
                  className='cursor-pointer transition-all ease-in hover:bg-white rounded-full'
                  onClick={() => handleMouseClick(index)}
                />
              </div>
            </div>
            <div className={`mt-[26px]`}>
              <Image
                loading='lazy'
                src={project.src}
                width={672}
                height={501}
                alt={project.alt}
                className='aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full rounded-lg mb-4'
              />
              <p className='text-sm tracking-[0.42px]'>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
