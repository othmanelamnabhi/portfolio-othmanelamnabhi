import ProjectCard from "../ProjectCard";

const listOfProjects = [
  {
    projectName: "Twiginity",
    projectLink: "https://twiginity.herokuapp.com",
    projectRepo: "https://github.com/othmanelamnabhi/twiginity",
    projectDescription:
      "Delete your Twitter posts in bulk based on their age or specific text they contain. Twiginity makes use of Twitter API 1.1.",
    projectStack: [
      "React",
      "Redis",
      "MongoDB",
      "Node.js",
      "Express",
      "Twitter API",
      "Socket.io",
      "MUI",
      "Heroku",
    ],
  },
  {
    projectName: "Personal Website v1",
    projectLink: "https://thewannabe.dev",
    projectRepo: "https://github.com/othmanelamnabhi/portfolio-thewannabedev",
    projectDescription:
      "This is the first version of my personal website. Built using frameworks, libraries and hosting platforms I wanted to experiment with and learn more about.",
    projectStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
];

function Projects() {
  return (
    <section id='projects' className='px-8 py-8 sm:px-14'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-4xl md:mb-6'>
        Projects
      </h2>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        {listOfProjects.map((project, index) => {
          return <ProjectCard project={project} key={project.projectName} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
