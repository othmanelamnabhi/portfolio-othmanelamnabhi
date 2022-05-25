function HamburgerButton({ isOpen, setIsOpen, setHidden }) {
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setHidden();
        }}
        className={`h-12 w-12 ${
          isOpen
            ? "bg-custom-dark-off-by-one dark:bg-custom-dark-coal-sprouse"
            : "bg-custom-light-dodger-blue dark:bg-custom-dark-3-days-ecchymose"
        } relative z-30 rounded-full md:hidden`}>
        <span
          className={`${
            isOpen
              ? "top-[12px] w-8 rotate-45 bg-custom-light-tarawera"
              : "top-[14px] w-6 rotate-0 bg-custom-dark-off-by-one"
          }  absolute left-[12px] mx-auto block h-1 origin-left rounded-xl duration-150 ease-out dark:bg-custom-dark-off-by-one`}></span>
        <span
          className={`absolute left-[12px] top-[22px] mx-auto block h-1 w-6 origin-left rotate-0 rounded-xl bg-custom-dark-off-by-one duration-150 ease-out ${
            isOpen ? `w-0 opacity-0` : null
          }`}></span>
        <span
          className={`${
            isOpen
              ? "top-[34px] w-8 -rotate-45 bg-custom-light-tarawera"
              : "top-[30px] w-6 rotate-0 bg-custom-dark-off-by-one"
          } absolute left-[12px] mx-auto block h-1 origin-left rounded-xl duration-150 ease-out dark:bg-custom-dark-off-by-one`}></span>
      </div>
    </>
  );
}

export default HamburgerButton;
