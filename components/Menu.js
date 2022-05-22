import Link from "next/link";

function Menu({ isOpen, setIsOpen, setHidden }) {
  return (
    <nav
      className={`${
        isOpen
          ? "fixed left-0 top-0 z-10 h-full w-full bg-custom-light-dodger-blue bg-opacity-100 dark:bg-custom-dark-3-days-ecchymose"
          : "fixed left-0 top-0 z-[-1] h-full w-full"
      } transition-all duration-300 ease-out`}>
      <ul
        className={`${
          isOpen ? "absolute" : "absolute"
        } left-1/2 flex h-full w-full -translate-x-1/2 flex-col justify-around py-20 font-Montserrat text-4xl font-bold uppercase text-custom-dark-off-by-one`}>
        <li
          className={`mx-auto duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            setHidden();
          }}>
          <Link href='/#about'>
            <a>About Me</a>
          </Link>
        </li>
        <li
          className={`mx-auto delay-100 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            setHidden();
          }}>
          <Link href='/#projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li
          className={`mx-auto delay-200 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            setHidden();
          }}>
          <Link href='/#blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li
          className={`mx-auto delay-300 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            setHidden();
          }}>
          <Link href='/#contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li
          className={`mx-auto delay-[400ms] duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}>
          <a href='#'>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
