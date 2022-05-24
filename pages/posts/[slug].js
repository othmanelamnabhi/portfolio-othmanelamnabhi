import Layout from "../../components/Layout";
import { getAllPostSlugs, getAllPostData } from "../../lib/posts";
import md from "markdown-it";
import { useEffect } from "react";
import Prism from "prismjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");

function BlogPost({ postData }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout title={postData.title} description={postData.description}>
      <article className='mx-8 my-12'>
        <div className='group mb-7 inline-block text-xl font-semibold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          <Link href={"/#blog"}>
            <a>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className='mr-3 duration-200 ease-out group-hover:-translate-x-1'
              />{" "}
              Back to Blog
            </a>
          </Link>
        </div>
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
          className='prose max-w-none  prose-headings:text-custom-light-tarawera prose-p:text-custom-light-shuttle-gray prose-a:text-custom-light-dodger-blue prose-strong:font-bold prose-strong:text-custom-light-shuttle-gray prose-code:text-custom-light-shuttle-gray prose-ol:text-custom-light-shuttle-gray prose-ul:text-custom-light-shuttle-gray dark:prose-headings:text-custom-dark-off-by-one dark:prose-p:text-custom-dark-gull-gray dark:prose-a:text-custom-dark-3-days-ecchymose dark:prose-strong:text-custom-dark-gull-gray dark:prose-code:text-custom-dark-off-by-one dark:prose-ol:text-custom-dark-gull-gray dark:prose-ul:text-custom-dark-gull-gray'
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
      dateAdded: post.params.dateAdded,
      description: post.params.description,
    };
  });

  const postData = formattedResponse.find((post) => post.slug === params.slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}
