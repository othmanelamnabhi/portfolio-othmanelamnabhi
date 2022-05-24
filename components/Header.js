import { useState } from "react";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const setHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <header className='mx-8 flex items-center justify-between pb-6'>
        <div className='font-Montserrat text-xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          <Link href='/'>
            <a>the wannabe dev</a>
          </Link>
        </div>
        <div>
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} setHidden={setHidden} />
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} setHidden={setHidden} />
          <ThemeSwitcher />
        </div>
      </header>
      <span className='mx-8 block bg-custom-dark-gull-gray p-[0.1px]'></span>
    </>
  );
}
