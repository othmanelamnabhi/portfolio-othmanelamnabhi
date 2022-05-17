function Menu({ isOpen }) {
  return (
    <nav
      className={`${
        isOpen
          ? "dark:bg-custom-dark-3-days-ecchymose bg-custom-light-dodger-blue fixed w-full h-full left-0 top-0 z-10"
          : ""
      } transition-all ease-out duration-150`}>
      <ul
        className={`${
          isOpen ? "absolute" : "hidden"
        } -translate-x-1/2 transition-all ease-out duration-150 left-1/2 text-4xl font-Montserrat font-bold uppercase flex flex-col h-full w-full justify-around py-20 text-custom-dark-off-by-one`}>
        <li className='my-0 mx-auto'>
          <a href='#'>About Me</a>
        </li>
        <li className='my-0 mx-auto'>
          <a href='#'>Projects</a>
        </li>
        <li className='my-0 mx-auto'>
          <a href='#'>Blog</a>
        </li>
        <li className='my-0 mx-auto'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
