import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useScrollPosition from "./hooks/useScrollPosition";
import useWindowSize from "./hooks/useWindowSize";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [moveUp, setMoveUp] = useState(false);
  const isAtBottom = useScrollPosition();
  const { width } = useWindowSize();

  const isLight = resolvedTheme === "light";

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setMoveUp(true);
      } else {
        setMoveUp(false);
      }
    });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    mounted && (
      <div
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={`fixed bottom-0 right-0 ${
          moveUp ? "mb-20" : "mb-5"
        } z-10 mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] duration-150 ease-out hover:scale-110 dark:bg-[#FFFFFF] ${
          isAtBottom && width < 640 ? "opacity-50" : "opacity-100"
        }`}>
        <FontAwesomeIcon
          icon={isLight ? faMoon : faSun}
          className='text-2xl text-[#FFFFFF] dark:text-[#000000]'
        />
      </div>
    )
  );
};

export default ThemeSwitcher;
