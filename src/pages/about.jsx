import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='max-w-7xl px-10 mx-auto pt-[166px]'>
      <div className='grid lg:grid-cols-2 gap-16'>
        <div className='bg-blend-luminosity bg-eche w-full h-[863px] bg-center bg-cover bg-no-repeat bg-primary rounded-[50px] animate-fade-up animate-duration-[2000ms] animate-ease-in-out'>
          {/* <Image src="/eche.jpg" alt="Eche Oji's picture" width={656} height={863} /> */}
        </div>
        <div className='animate-fade animate-duration-[2000ms] animate-ease-in'>
          <h3 className='text-accent mb-[14px]'>Who am i?</h3>
          <h3 className='mb-2 text-[28px] font-bold tracking-[0.84px]'>
            I&rsquo;m Echezona Oji, a Product designer
          </h3>
          <p className='leading-[150%] tracking-[0.48px] lg:w-[90%] mb-5'>
            As a passionate designer, my goal is to create exceptional designs
            that seamlessly merge functionality with aesthetics. I specialize in
            the unique fusion of product design and UI/UX design, allowing me to
            transform visions and ideas into tangible, user-friendly, and
            visually captivating products.
            <br />
            <br />
            With a keen eye for product evolution, I excel in prioritizing
            tasks, iterating rapidly, and delivering results efficiently. I'm
            driven by the belief that the best designs not only look good but
            also enhance user experiences, and I'm dedicated to crafting
            meaningful and useful solutions that delight both the eye and the
            end user.
          </p>
          <div className='flex gap-3 opacity-30 mb-10'>
            <div className='flex'>
              <Image width={16.2} height={16.2} src='/map.svg' alt="map pin" />
              <span className='text-sm ml-[6px]'>Abuja, Nigeria</span>
            </div>
            <div className='flex'>
            <Image width={16.2} height={16.2} src='/mail.svg' alt="mail icon" />
              <a href="mailto:Echezona2000@gmail.com" className='underline text-sm ml-[6px] hover:text-accent'>Echezona2000@gmail.com</a>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <Link href={'https://drive.google.com/file/d/1rB12Irl8TrAbVWUGrOKVDrf_wwPpluTm/view'} target='_blank' className='px-6 py-[17px] flex border border-accent rounded-lg hover:bg-accent transition-all ease-in'>
            <Image width={20} height={20} src='/resume.svg' alt="resume icon" className='mr-3' />
            View resume
            </Link>
            <hr className='opacity-30 w-[50px]' />
            <ul className='flex gap-4'>
          <li className='tracking-[0.42px] text-sm'><Image src='/linkedin.svg' width={16} height={16} alt="linkedin icon" /></li>
          <li className='tracking-[0.42px] text-sm'><Image src='/behance.svg' width={16} height={16} alt="behance icon" /></li>
          <li className='tracking-[0.42px] text-sm'><Image src='/whatsapp.svg' width={15.8} height={16} alt="whatsapp icon" /></li>
        </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
