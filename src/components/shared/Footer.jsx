import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-primary pt-20 px-10'>
      <hr className='max-w-7xl mx-auto opacity-20 ' />
      <nav className='flex justify-between items-center max-w-7xl mx-auto h-[92px]'>
        <div className='text-sm flex items-center tracking-[0.42px]'>
          <span className='mr-[6px] mt-2 text-2xl'>&copy;</span>2023Echezona oji
        </div>
        <ul className='flex gap-4'>
        <Link href={'https://www.linkedin.com/in/echezona-oji-263b1b148'} target="_blank" className="ease-in transition-all hover:scale-110">
          <li className='tracking-[0.42px] text-sm'><Image src='/linkedin.svg' width={16} height={16} alt="linkedin icon" /></li>
          </Link>
          <Link href={'https://www.behance.net/echezonaoji'} target="_blank" className="ease-in transition-all hover:scale-110">
          <li className='tracking-[0.42px] text-sm'><Image src='/behance.svg' width={16} height={16} alt="behance icon" /></li></Link>
          <Link href={'https://wa.me/+2347085758177'} target="_blank" className="ease-in transition-all hover:scale-110">
          <li className='tracking-[0.42px] text-sm'><Image src='/whatsapp.svg' width={15.8} height={16} alt="whatsapp icon" /></li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
