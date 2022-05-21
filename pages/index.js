import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import { getAllPostData } from "../lib/posts";

function HomePage({ postData }) {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Projects />
      <Blog postData={postData} />
      <Contact />
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  // Fetch necessary data for the blog post using params.id
  const apiPostData = await getAllPostData();
  const postData = apiPostData.map((post) => {
    return {
      title: post.params.title,
      slug: post.params.slug,
      dateAdded: post.params.dateAdded,
    };
  });

  console.log("postData", postData.length);
  return {
    props: {
      postData,
    },
  };
}
