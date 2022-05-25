import Link from "next/link";
import useWindowSize from "./hooks/useWindowSize";

const menuItems = [
  { name: "About Me", href: "/#about", delay: null },
  { name: "Projects", href: "/#projects", delay: "delay-100" },
  { name: "Blog", href: "/#blog", delay: "delay-200" },
  { name: "Contact", href: "/#contact", delay: "delay-300" },
  // { name: "Resume", href: "/#resume", delay: "delay-[400ms]" },
];

function Menu({ isOpen, setIsOpen, setHidden }) {
  const { width } = useWindowSize();
  return (
    <nav
      className={`${
        isOpen
          ? "fixed left-0 top-0 z-20 h-full w-full bg-custom-light-dodger-blue bg-opacity-100 dark:bg-custom-dark-3-days-ecchymose"
          : "fixed left-0 top-0 z-[-1] h-full w-full"
      } transition-all duration-300 ease-out md:relative md:top-auto md:left-auto md:z-auto md:h-auto md:w-auto`}>
      <ul
        className={`${
          isOpen ? "absolute" : "absolute md:relative"
        } left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-around py-20 font-Montserrat text-4xl font-bold uppercase text-custom-dark-off-by-one md:left-auto md:h-auto md:w-auto md:transform-none md:flex-row md:gap-5 md:py-0 md:text-[1.25em] md:font-normal md:lowercase md:text-custom-light-shuttle-gray md:dark:text-custom-dark-gull-gray`}>
        {menuItems.map((item, index) => {
          return (
            <li
              className={`mx-auto duration-500 ease-out md:duration-[0ms] ${
                item.delay
              } md:delay-[0ms] ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }  md:transform-none md:font-normal md:opacity-100 md:hover:font-semibold`}
              onClick={() => {
                if (width >= 768) return;
                setIsOpen(!isOpen);
                setHidden();
              }}
              key={index}>
              <Link href={item.href}>
                <a
                  title={item.name}
                  className='before:invisible before:block before:h-0 before:overflow-hidden before:font-semibold before:content-[attr(title)]'>
                  {item.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
