import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function BackToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    showTopBtn && (
      <div
        onClick={goToTop}
        className='fixed bottom-0 right-0 mb-5 mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-custom-light-dodger-blue duration-150 hover:scale-110 dark:bg-custom-dark-3-days-ecchymose'>
        <FontAwesomeIcon
          icon={faArrowUp}
          className='text-2xl text-custom-dark-off-by-one'
        />
      </div>
    )
  );
}

export default BackToTopButton;
