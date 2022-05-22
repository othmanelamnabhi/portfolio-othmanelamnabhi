import CloudTag from "../CloudTag";

function AboutMe() {
  return (
    <section
      id='about'
      className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        About me
      </h2>
      <p className='text-justify text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Hello! My name is Othmane and Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p className='text-justify text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Hello! My name is Othmane and Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <p className='text-justify text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Here are a few technologies I’ve been working with recently:
      </p>
      <CloudTag />
    </section>
  );
}

export default AboutMe;
