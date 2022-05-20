function Contact() {
  return (
    <section className='px-8 py-8 text-center'>
      <h2 className='mb-6 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        Get in touch
      </h2>
      <p className='mb-9 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Although I’m not currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my best to get
        back to you!
      </p>
      <a className='inline-block rounded-sm bg-custom-light-dodger-blue px-8 py-4 font-bold text-custom-dark-off-by-one duration-300 ease-out hover:scale-105 dark:bg-custom-dark-3-days-ecchymose'>
        Say Hello 👋
      </a>
    </section>
  );
}

export default Contact;
