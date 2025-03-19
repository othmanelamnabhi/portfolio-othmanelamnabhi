import CloudTag from "../CloudTag";

function AboutMe() {
	return (
		<section
			id='about'
			className='bg-custom-light-pattens-blue px-8 py-8 dark:bg-custom-dark-motorcycle-black sm:px-14 '>
			<h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-4xl '>
				About me
			</h2>
			<div className='md:flex md:items-center md:gap-16'>
				<div className='md:w-1/2'>
					<p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
						I am a trilingual front-end developer with a strong foundation in
						Tanstack, Typescript, React, Node.js and over five years of
						experience building high-quality digital solutions. My journey
						from corporate finance to tech has shaped my approach to
						development—combining analytical thinking, problem-solving, and
						project management to create solutions that are both functional
						and impactful.
					</p>
					<p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
						I specialize in developing scalable, accessible, and user-friendly
						applications, bridging the gap between business objectives and
						technical execution. Whether it’s optimizing a website’s
						performance, enhancing user experience, or integrating complex
						front-end components, I thrive on tackling challenges with a
						holistic and strategic mindset.
					</p>
					<p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
						I’m always learning and adapting, refining my skillset to stay
						ahead of the curve.
					</p>
					<p className='mb-3 text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
						Here are a few technologies I’ve been working with recently:
					</p>
				</div>
				<CloudTag />
			</div>
		</section>
	);
}

export default AboutMe;
