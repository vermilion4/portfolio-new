import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='min-h-[80vh] md:min-h-[70vh] lg:min-h-[100vh] place-content-center grid bg-hero pt-40 md:pb-5 lg:pb-0'>
      <div className='relative w-4/5 sm:w-2/3 max-w-7xl flex flex-col items-center mx-auto'>
        <div className='absolute -top-5 lg:left-0 -left-5 animate-pulse'>
          <div className='relative p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white border-opacity-10'>
            <span className='px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]'>
              Brand Design
            </span>
            <Image
              src='/cursor1.svg'
              width={14}
              height={19}
              alt='cursor'
              className='absolute -bottom-3 -right-1 animate-bounce'
            />
          </div>
        </div>
        <div className='relative -top-16 p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white border-opacity-10 animate-pulse'>
          <span className='px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]'>
            Graphic Design
          </span>
          <Image
            src='/cursor2.svg'
            width={14}
            height={19}
            alt='cursor'
            className='absolute -bottom-3 -right-1 animate-bounce'
          />
        </div>
        <div className='absolute -top-5 lg:right-0 -right-5'>
          <div className='p-1 pt-[2.5px] rounded-[2px] border-[0.5px] border-white border-opacity-10 animate-pulse'>
            <span className='px-2 py-[3px] rounded-[2px] text-xs lg:text-sm tracking-[0.42px] border-[0.5px] border-white border-opacity-10 bg-white bg-opacity-[12%]'>
              UI/UX Design
            </span>
            <Image
              src='/cursor3.svg'
              width={14}
              height={19}
              alt='cursor'
              className='absolute -bottom-3 -right-1 animate-bounce'
            />
          </div>
        </div>
        <h1 className='mb-[7px] animate-fade-up animate-duration-[1500ms] animate-ease-out text-base'>Hi, my name is Echezona Oji</h1>
        <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold tracking-[1.44px] text-center xl:leading-snug mb-[25px] md:mb-[53px] animate-fade-up animate-duration-[1500ms] animate-delay-[400ms] animate-ease-out'>
          My passion lies in crafting{' '}
          <span className='text-accent'>memorable</span> experiences through
          human-centric & data-driven{' '}
          <span className='text-accent'>designs</span>.
        </h2>
        <div className='px-4 md:px-5 py-[10px] md:py-3 bg-accent bg-opacity-20 flex gap-6 items-center rounded-lg animate-fade-up animate-duration-[1500ms] animate-delay-[800ms] animate-ease-out'>
          <p>Check out my projects</p>
          <Link href={'/projects'}>
          <Image src='/arrow.svg' width={40} height={40} alt='arrow right' className='hover:scale-105 ease-in transition-all animate-pulse' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
