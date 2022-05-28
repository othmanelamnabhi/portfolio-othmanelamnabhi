import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useScrollPosition = () => {
  const { width } = useWindowSize();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkIfAtBottom = () => {
      if (width >= 640) {
        return;
      }
      if (
        window.pageYOffset + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", checkIfAtBottom);
    checkIfAtBottom();

    return () => window.removeEventListener("scroll", checkIfAtBottom);
  }, [width]);

  return isAtBottom;
};

export default useScrollPosition;
