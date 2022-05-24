import Image from "next/image";

function Hero() {
  return (
    <section className='mx-8 mt-12'>
      <div className='block'>
        <h1 className='mb-3 font-Montserrat text-4xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          Hi there,
          <br />
          I&apos;m Othmane.
        </h1>
        <p className='mb-4 font-Montserrat font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
          I&apos;m a <span className='font-bold'>Full Stack Developer</span> and I love
          bringing ideas to life through code.
        </p>
      </div>
      <Image
        src='/images/othmane_lamnabhi_headshot_hq_v2.png'
        alt='Picture of Othmane Lamnabhi'
        width={2413}
        height={2687}
        layout='responsive'
        priority={true}
        placeholder='empty'
        sizes='50vw'
      />
    </section>
  );
}

export default Hero;
