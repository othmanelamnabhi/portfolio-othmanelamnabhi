import ProjectCard from "../ProjectCard";

const listOfProjects = [
  {
    projectName: "Twiginity",
    projectLink: "https://twiginity.herokuapp.com",
    projectRepo: "https://github.com/othmanelamnabhi/twiginity",
    projectDescription:
      "You can delete your most recent tweets or all your tweets with Twiginity. Frontend built with React / Backend with Node/Express.",
    projectStack: [
      "React",
      "Redis",
      "MongoDB",
      "Node.js",
      "Express",
      "Twitter API",
      "Socket.io",
      "MUI",
    ],
  },
];

function Projects() {
  return (
    <section className='px-8 py-8'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
        Projects
      </h2>
      {listOfProjects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </section>
  );
}

export default Projects;
