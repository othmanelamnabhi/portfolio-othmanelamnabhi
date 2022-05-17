import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashnode } from "@fortawesome/free-brands-svg-icons";

function ProjectCard() {
  return (
    <div className='bg-custom-light-tarawera p-4 dark:bg-custom-dark-motorcycle-black'>
      <div className='text-base font-semibold text-custom-light-dodger-blue dark:text-custom-dark-3-days-ecchymose'>
        Featured project
      </div>
      <h3 className='text-2xl font-bold text-custom-dark-off-by-one'>Twiginity</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt convallis nunc,
        et sem quam vestibulum, ultrices mattis in. Scelerisque et fames turpis vestibulum
        vitae duis erat ante. Nascetur turpis pellentesque nisi nisl pellentesque. Integer
        dolor nulla sit egestas vehicula massa ut est. Nunc volutpat massa est egestas
        convallis purus at. Risus est nulla ut quis rutrum pellentesque nibh pellentesque.{" "}
      </p>
      <div>
        <span></span>
        <span></span>
      </div>
      <div></div>
      <FontAwesomeIcon icon={faHashnode} />
    </div>
  );
}

export default ProjectCard;
