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
					I&apos;m a <span className='font-bold'>Frontend Developer</span> and I
					love bringing ideas to life through code.
				</p>
			</div>
			<div className='md:w-1/2'>
				<Image
					src='/images/othmane_lamnabhi_headshot_optimized.webp'
					alt='Picture of Othmane Lamnabhi'
					width={800}
					height={822}
					priority={true}
					quality={85}
					sizes='(max-width: 768px) 100vw, 50vw'
					className='rounded-lg'
				/>
			</div>
		</section>
	);
}

export default Hero;
