import BlogArticle from "../BlogArticle";

function Blog({ postData }) {
  return (
    <section
      id='blog'
      className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        Blog
      </h2>
      {postData.map((post, index) => {
        return <BlogArticle post={post} key={index} />;
      })}
    </section>
  );
}

export default Blog;
