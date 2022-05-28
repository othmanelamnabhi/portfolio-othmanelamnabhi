import { useEffect } from "react";
import { useTheme } from "next-themes";
import useWindowSize from "./hooks/useWindowSize";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "REST API",
  "React",
  "Redis",
  "MUI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
];

function CloudTag() {
  const { resolvedTheme } = useTheme();
  const { width } = useWindowSize();

  useEffect(() => {
    const options = {
      textColour: resolvedTheme === "light" ? "#3DA9FC" : "#7F5AF0",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      initial: [0.1, -0.1],
      activeCursor: "pointer",
      wheelZoom: false,
      decel: 1,
      textHeight: 60,
      outlineMethod: "none",
      noSelect: true,
      zoom: 0.9,
      noMouse: width >= 768 ? false : true,
    };

    try {
      TagCanvas.Start("myCanvas", null, options);
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }, [resolvedTheme, width]);
  return (
    <>
      <div id='myCanvasContainer' className='md:w-1/2'>
        <canvas width='700' height='700' id='myCanvas' className='w-full font-bold'>
          <p>
            Anything in here will be replaced on browsers that support the canvas element
          </p>

          {skills.map((skill) => {
            return (
              <a href='#' key={skill}>
                {skill}
              </a>
            );
          })}
        </canvas>
      </div>
    </>
  );
}

export default CloudTag;
