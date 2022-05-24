function Contact() {
  return (
    <section id='contact' className='px-8 py-8 text-center'>
      <h2 className='mb-6 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        Get in touch
      </h2>
      <p className='mb-9 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        I am currently looking 🔍 for Javascript, React and Node.js opportunities
        (full-time or freelance).
        <br />
        If you have any questions, think we&apos;re a fit or just want to say hi, feel
        free to reach out to me.
      </p>
      <a
        href='mailto:othmane@thewannabe.dev'
        className='inline-block rounded-sm bg-custom-light-dodger-blue px-8 py-4 font-bold text-custom-dark-off-by-one duration-300 ease-out hover:scale-105 dark:bg-custom-dark-3-days-ecchymose'>
        Say Hello 👋
      </a>
    </section>
  );
}

export default Contact;
