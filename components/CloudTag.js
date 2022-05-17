import Script from "next/script";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Redis",
  "MUI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
];

function CloudTag() {
  const { resolvedTheme } = useTheme();

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
    };

    try {
      TagCanvas.Start("myCanvas", null, options);
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }, [resolvedTheme]);
  return (
    <>
      <Script src='/scripts/tagcanvas.min.js' strategy='beforeInteractive' />
      <div id='myCanvasContainer'>
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