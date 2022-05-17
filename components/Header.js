import { useState } from "react";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='flex justify-between items-center pb-6 mx-8'>
        <div className='font-Montserrat font-bold text-xl text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          the wannabe dev
        </div>
        <div>
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <Menu isOpen={isOpen} />
        </div>
      </header>
      <span className='block p-[0.1px] bg-custom-dark-gull-gray mx-8'></span>
    </>
  );
}
