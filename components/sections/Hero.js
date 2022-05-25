import Image from "next/image";

function Hero() {
  return (
    <section className='mt-12 px-8 sm:px-14 sm:text-center md:flex'>
      <div className='md:w-1/2 md:pt-24 md:text-left'>
        <h1 className='mb-3 font-Montserrat text-4xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-5xl'>
          Hi there,
          <br />
          I&apos;m Othmane.
        </h1>
        <p className='mb-4 font-Montserrat font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray sm:px-20 md:pl-0'>
          I&apos;m a <span className='font-bold'>Full Stack Developer</span> and I love
          bringing ideas to life through code.
        </p>
      </div>
      <div className='md:w-1/2'>
        <Image
          src='/images/othmane_lamnabhi_headshot_hq_v2.png'
          alt='Picture of Othmane Lamnabhi'
          width={2413}
          height={2480}
          layout='responsive'
          priority={true}
          placeholder='empty'
          sizes='50vw'
        />
      </div>
    </section>
  );
}

export default Hero;
