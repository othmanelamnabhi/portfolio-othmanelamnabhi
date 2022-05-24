import "../styles/globals.css";
import "../styles/prism-atom-dark.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const setSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
    const unsetSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "unset";
    };
    if (router.pathname === "/") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    const checkBeforeSettingSmoothScroll = () => {
      if (router.pathname !== "/") {
        setSmoothScroll();
      } else {
        unsetSmoothScroll();
      }
    };

    router.events.on("routeChangeStart", checkBeforeSettingSmoothScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <ThemeProvider attribute='class'>
      <Script src='/scripts/tagcanvas.min.js' strategy='beforeInteractive' />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
