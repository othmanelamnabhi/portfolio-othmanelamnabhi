import Image from "next/image";

function Hero() {
  return (
    <section className='mx-8 mt-12'>
      <div className='block'>
        <h1 className='mb-4 font-Montserrat text-4xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
          Hey there, <br />
          I&apos;m Othmane
        </h1>
        <p className='font-Montserrat text-base font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
          If I&apos;m not thinking about code then I&apos;m most definitely thinking about
          sushi
        </p>
      </div>
      <Image
        src='/images/othmane_lamnabhi_headshot_hq_v2.png'
        alt='Picture of Othmane Lamnabhi'
        width={2413}
        height={2687}
        layout='responsive'
        priority
      />
    </section>
  );
}

export default Hero;
