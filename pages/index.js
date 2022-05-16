import Layout from "../components/layout";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
}

export default HomePage;
