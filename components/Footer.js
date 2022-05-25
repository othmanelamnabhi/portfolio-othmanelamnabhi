import BackToTopButton from "./BackToTopButton";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className='mt-5 px-8 sm:px-14'>
      <BackToTopButton />
      <div className='mb-6'>
        <SocialLinks />
      </div>
      <div className='text-center text-sm font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
        Designed & Built by{" "}
        <span className='text-custom-light-dodger-blue dark:text-custom-dark-3-days-ecchymose'>
          Othmane Lamnabhi
        </span>
      </div>
    </footer>
  );
}
