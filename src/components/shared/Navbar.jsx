import CustomImage from "./CustomImage";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter();
  let nav = router.pathname;

  return ( 
    <header className="px-5 sm:px-10 fixed w-full top-0 z-50 backdrop-blur-lg bg-[rgba(0,0,0,0.2)]">
      {
        openMenu && <div onClick={()=> setOpenMenu(false)} className="left-0 top-0 absolute w-screen ease-in transition-all duration-500 h-screen bg-black bg-opacity-30 z-20">
        </div>
      }

      <nav className="flex justify-between items-center max-w-7xl mx-auto h-[92px]">
        <div className="flex gap-6 items-center">
          <Link href={'/'}>
            <CustomImage width={69} height={32.33} src='/logo.png' alt="Ada's Logo" />
          </Link>
          <div className="space-y-1 hidden md:block">
            <h3 className="text-white font-bold tracking-[0.48px]">Frontend Developer</h3>
            <p className="text-white opacity-50 text-sm tracking-[0.42px]">Adaeze Ndupu</p>
          </div>
        </div>
        <ul className="hidden md:flex gap-4">
          <Link href={'/'} className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/' && 'bg-accent'} ease-in transition-all `} >Home</Link>
          <Link href={'/projects'} className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/projects' && 'bg-accent'} ease-in transition-all `}>Projects</Link>
          <Link href='/about' className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/about' && 'bg-accent'} ease-in transition-all `}>About</Link>
        </ul>
        <CustomImage width={24} height={24} src='/hamburger.svg' alt="menu icon" className="md:hidden hover:cursor-pointer" onClick={()=> setOpenMenu(!openMenu)} />     
      </nav>
      <div
      className={`md:hidden absolute top-[74px] right-0 ${openMenu ? 'translate-x-0 opacity-100' : 'translate-x-[500px] opacity-0'} transition-all ease-in duration-500 z-30 bg-primary p-10`}
    >
      <ul className="flex flex-col gap-4 text-center">
        <Link href={'/'} className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/' && 'bg-accent'} ease-in transition-all `} onClick={()=> setOpenMenu(false)}>Home</Link>
        <Link href={'/projects'} className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/projects' && 'bg-accent'} ease-in transition-all `} onClick={()=> setOpenMenu(false)}>Projects</Link>
        <Link href='/about' className={`px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ${nav === '/about' && 'bg-accent'} ease-in transition-all `} onClick={()=> setOpenMenu(false)}>About</Link>
      </ul>
    </div>
    </header>
   );
}

export default Navbar;