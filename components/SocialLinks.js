import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHashnode,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faGithub, link: "https://github.com/othmanelamnabhi", ariaLabel: "github" },
  {
    icon: faHashnode,
    link: "https://thewannabedev.hashnode.dev/",
    ariaLabel: "hashnode",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/othmanelamnabhi/",
    ariaLabel: "linkedin",
  },
  { icon: faTwitter, link: "https://twitter.com/thewannabedev", ariaLabel: "twitter" },
];

function SocialLinks() {
  return (
    <ul className='flex justify-around'>
      {socialLinks.map((socialLink, index) => {
        return (
          <li key={index}>
            <a
              href={socialLink.link}
              target='_blank'
              rel='noreferrer'
              aria-label={socialLink.ariaLabel}>
              <FontAwesomeIcon
                icon={socialLink.icon}
                className='text-3xl text-custom-light-tarawera duration-300 ease-out hover:text-custom-light-dodger-blue dark:text-custom-dark-off-by-one hover:dark:text-custom-dark-3-days-ecchymose'
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
