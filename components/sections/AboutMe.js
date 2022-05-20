import CloudTag from "../CloudTag";

function AboutMe() {
  return (
    <section className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        About me
      </h2>
      <p className='text-justify text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        My inherent curiosity in my career has led me down numerous paths: finance, event
        planning, project management, and digital marketing. Although they initially
        seemed unrelated, these experiences led to my realization of my passion for tech
        and helped me develop my most-prized skill to this day: T-shaped learning. After
        pursuing a Master’s degree in Corporate Finance, I tried my hand at multiple
        roles, but it just wasn’t it, Tech kept calling back to me, which led to a
        position with AD/HOC digital agency. As a self-taught professional, every client
        request and every project was an opportunity for me to grow and to widen my
        skillset.
      </p>
      <CloudTag />
    </section>
  );
}

export default AboutMe;
