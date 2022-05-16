import Image from "next/image";
import HamburgerButton from "./HamburgerButton";

export default function Header() {
  return (
    <>
      <header className='flex justify-between items-center pb-6'>
        <div className='font-Montserrat font-bold text-xl text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          the wannabe dev
        </div>
        <div>
          <HamburgerButton />
          <nav className='hidden'>
            <a href='/html/'>About</a>
            <a href='/css/'>Blog</a>
            <a href='/js/'>Contact</a>
          </nav>
        </div>
      </header>
      <span className='w-full block p-[0.1px] bg-custom-dark-gull-gray'></span>
    </>
  );
}
