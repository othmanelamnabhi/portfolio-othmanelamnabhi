import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function BlogArticle() {
  return (
    <div className='group bg-custom-dark-off-by-one p-4 duration-300 hover:-translate-y-2 hover:shadow-3xl dark:bg-custom-dark-coal-sprouse dark:hover:shadow-custom-light-shuttle-gray'>
      <div className='text-xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        I always wanted to be an Astronaut
      </div>
      <time className='text-sm font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Mar 7, 2022
      </time>
      <div className='flex justify-end'>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className='text-3xl group-hover:animate-horizontal-bounce'
        />
      </div>
    </div>
  );
}

export default BlogArticle;
