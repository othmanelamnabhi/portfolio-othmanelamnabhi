import Image from "next/image";
import Layout from "../../components/Layout";
import { getAllPostSlugs, getAllPostData } from "../../lib/posts";
import md from "markdown-it";
import { useEffect } from "react";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");

function BlogPost({ postData }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  console.log(postData.contentMarkdown);
  return (
    <Layout>
      <article className='mx-8 my-12 max-w-none'>
        <h1 className='text-4xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          {postData.title}
        </h1>
        <time className='mt-4 mb-6 block font-semibold text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(postData.dateAdded))}
        </time>
        <div
          className='prose prose-headings:text-custom-light-tarawera  prose-p:text-custom-light-shuttle-gray prose-a:text-custom-light-dodger-blue prose-strong:font-bold prose-strong:text-custom-light-shuttle-gray prose-code:text-custom-light-shuttle-gray prose-ol:text-custom-light-shuttle-gray prose-ul:text-custom-light-shuttle-gray dark:prose-headings:text-custom-dark-off-by-one dark:prose-p:text-custom-dark-gull-gray dark:prose-a:text-custom-dark-3-days-ecchymose dark:prose-strong:text-custom-dark-gull-gray dark:prose-code:text-custom-dark-off-by-one dark:prose-ol:text-custom-dark-gull-gray dark:prose-ul:text-custom-dark-gull-gray'
          dangerouslySetInnerHTML={{ __html: md().render(postData.content) }}
        />
      </article>
    </Layout>
  );
}

export default BlogPost;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const apiPostData = await getAllPostData();
  const formattedResponse = apiPostData.map((post) => {
    return {
      title: post.params.title,
      slug: post.params.slug,
      content: post.params.contentMarkdown,
      coverImage: post.params.coverImage,
      dateAdded: post.params.dateAdded,
    };
  });

  const postData = formattedResponse.find((post) => post.slug === params.slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  // console.log("postData", treatedData);
  return {
    props: {
      postData,
    },
  };
}
