import { useRef, useState } from "react";

function HamburgerButton({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`w-12 h-12 ${
          isOpen
            ? "dark:bg-custom-dark-coal-sprouse bg-custom-dark-off-by-one"
            : "dark:bg-custom-dark-3-days-ecchymose bg-custom-light-dodger-blue"
        } rounded-full z-20 relative`}>
        <span
          className={`${
            isOpen
              ? "w-8 top-[12px] rotate-45 bg-custom-light-tarawera"
              : "w-6 rotate-0 top-[14px] bg-custom-dark-off-by-one"
          }  h-1 dark:bg-custom-dark-off-by-one rounded-xl mx-auto block absolute left-[12px] origin-left ease-out duration-150`}></span>
        <span
          className={`w-6 h-1 bg-custom-dark-off-by-one rounded-xl mx-auto block absolute rotate-0 left-[12px] top-[22px] origin-left ease-out duration-150 ${
            isOpen ? `w-0 opacity-0` : null
          }`}></span>
        <span
          className={`${
            isOpen
              ? "w-8 top-[34px] -rotate-45 bg-custom-light-tarawera"
              : "w-6 rotate-0 top-[30px] bg-custom-dark-off-by-one"
          } h-1 rounded-xl mx-auto block absolute left-[12px] origin-left ease-out duration-150 dark:bg-custom-dark-off-by-one`}></span>
      </div>
    </>
  );
}

export default HamburgerButton;
