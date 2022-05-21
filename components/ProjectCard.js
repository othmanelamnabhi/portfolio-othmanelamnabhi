import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({
  project: { projectName, projectLink, projectRepo, projectDescription, projectStack },
}) {
  return (
    <div className='mb-4 bg-custom-light-tarawera p-4 dark:bg-custom-dark-motorcycle-black'>
      <div className='mb-1 text-base font-semibold text-custom-light-dodger-blue dark:text-custom-dark-3-days-ecchymose'>
        Featured project
      </div>
      <h3 className='text-2xl font-bold text-custom-dark-off-by-one'>{projectName}</h3>
      <p className='my-5 text-custom-light-pattens-blue dark:text-custom-dark-gull-gray'>
        {projectDescription}
      </p>
      <div className='flex flex-wrap'>
        {projectStack.map((stack, index) => {
          return (
            <span
              className='mr-2 mb-2 bg-custom-light-dodger-blue p-1 text-sm text-custom-dark-off-by-one dark:bg-custom-dark-3-days-ecchymose'
              key={stack}>
              {stack}
            </span>
          );
        })}
      </div>
      <div className='mt-5'>
        <a href={projectRepo} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon
            icon={faGithub}
            className='mr-4 text-3xl text-custom-dark-off-by-one duration-300 ease-out hover:text-custom-light-dodger-blue hover:dark:text-custom-dark-3-days-ecchymose'
          />
        </a>
        <a href={projectLink} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className='mr-4 text-3xl text-custom-dark-off-by-one duration-300 ease-out hover:text-custom-light-dodger-blue hover:dark:text-custom-dark-3-days-ecchymose'
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
