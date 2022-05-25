import BlogArticle from "../BlogArticle";

function Blog({ postData }) {
  return (
    <section
      id='blog'
      className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black sm:px-14'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-4xl md:mb-6'>
        Blog
      </h2>
      <div className='sm:flex sm:gap-3'>
        {postData.map((post, index) => {
          return <BlogArticle post={post} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Blog;
