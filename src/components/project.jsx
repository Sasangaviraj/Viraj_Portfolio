import { LuExternalLink, LuGithub } from "react-icons/lu";

const Project = ({ image, ProjectName, ProjectDetails, Technology, liveUrl, githubUrl }) => {
  return (
    // Main project card container
    <div className="overflow-hidden transition-all duration-500 bg-white border border-gray-200 rounded-lg cursor-pointer  dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-xl">

      <div className="relative">
        <img
          src={image}
          alt={ProjectName}
          className="object-cover w-full h-48"
        />
        {/* "Professional" badge */}
        <span className="absolute px-2 text-white bg-black rounded-lg top-4 right-4 text-button-p dark:bg-gray-700">
          Professional
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4">
     
        <h3 className="font-semibold text-black text-hero-p dark:text-white">{ProjectName}</h3>
    
        <p className="text-gray-600 text-button-p dark:text-gray-300">{ProjectDetails}</p>

       
        <div className="flex flex-wrap gap-2">
          {Technology.map((tech, index) => (
            <span
              key={index}
              className="bg-white border border-gray-400 text-black font-semibold text-project-tech px-2 py-0.2 rounded-lg cursor-pointer
                         dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Demo and Code Buttons */}
        <div className="flex gap-4 mt-2">
          {/* Live Demo Button */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-2 py-1 text-white transition-colors duration-200 bg-black rounded-lg text-button-p hover:bg-gray-800 dark:bg-dark dark:hover:bg-indigo-700" // Using a slightly different dark color for primary action
          >
            <LuExternalLink size={14} /> Live Demo
          </a>
          {/* Code Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <LuGithub size={14} /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
