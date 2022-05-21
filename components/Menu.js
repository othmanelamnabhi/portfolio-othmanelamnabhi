function Menu({ isOpen }) {
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
          }`}>
          <a href='#'>About Me</a>
        </li>
        <li
          className={`mx-auto delay-100 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}>
          <a href='#'>Projects</a>
        </li>
        <li
          className={`mx-auto delay-200 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}>
          <a href='#'>Blog</a>
        </li>
        <li
          className={`mx-auto delay-300 duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
