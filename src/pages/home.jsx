import React from "react";
// Assuming BlackButton and WhiteButton also have dark mode styling internally or via props
import BlackButton from "../components/buttons/blackbutton";
import WhiteButton from "../components/buttons/whitebutton";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// MdOutlineEmail is imported but not used, keeping it for now.
import { MdOutlineEmail } from "react-icons/md";
// Project component assumed to handle its own dark mode styling internally
import Project from "../components/project";
import { LuGithub, LuPhone } from "react-icons/lu";
import caraimage from "../assets/cara.png";
import educaimage from "../assets/educa.png";
import amayacoffeimage from "../assets/amayacoffe.png";
import startup from "../assets/startup.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../motion/motion";

const Home = () => {
  const skillData = [
    { skill: "React js", detail: "1 Year + experience" },
    { skill: "Tailwind css", detail: "1 Year + experience" },
    { skill: "Node Js", detail: "1 Year + experience" },
    { skill: "Express", detail: "1 Year + experience" },
    { skill: "MongoDb", detail: "1 Year + experience" },
    { skill: "Type Script", detail: "6 Month experience" },
  ];

  const Technology = [
    { title: "UI/UX" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "Js" },
    { title: "React" },
    { title: "TypeScript" },
    { title: "Tailwind css" },
    { title: "Node Js" },
    { title: "Express" },
    { title: "FastAPI" },
    { title: "Vite" },
    { title: "Git" },
    { title: "AWS" },
    { title: "Mongo DB" },
    { title: "MUI" },
    { title: "AND Design" },
    { title: "Framer Motion" },
    { title: "Firebase " },
  ];

  return (
    // Outer div for overall dark mode background and text color
    <div className="text-black transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* hero section */}
      <section
        id="home"
        className=" container flex flex-col lg:gap-6 gap-4 items-center justify-center h-screen  w-full mx-auto sm:px-10 lg:px-[120px] "
      >
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-black dark:text-white lg:text-h1 text-h2-sm"
        >
          Viraj Jayakodi
        </motion.h1>
        <motion.h3
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-gray-700 text-subtopic dark:text-gray-300"
        >
          Web Developer
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="px-4 text-center text-gray-600 lg:text-hero-p text-button-p dark:text-gray-400"
        >
          Highly motivated Web Developer with hands-on experience in both
          frontend (React.js, Tailwind CSS, Framer Motion) and backend (Node.js,
          Express.js) development. Proficient in database management with
          MongoDB Atlas and implementing secure user authentication using
          Firebase Authentication. Passionate about building scalable,
          user-friendly solutions and actively seeking an internship to
          contribute to impactful real-world web projects.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.45)}
          initial="hidden"
          whileInView="show"
          className="flex gap-2"
        >
          {/* Assuming BlackButton and WhiteButton are also styled for dark mode */}
          <BlackButton
            onclick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            title="View project"
          />
          <WhiteButton
            onclick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            title="Contact Me"
          />
        </motion.div>
        <div className="flex items-center justify-center gap-6">
          <FiGithub className="w-4 h-4 text-gray-800 cursor-pointer dark:text-white" />
          <FiLinkedin className="w-4 h-5 text-gray-800 cursor-pointer dark:text-white" />
          <FiMail className="w-4 h-5 text-gray-800 cursor-pointer dark:text-white" />
        </div>
      </section>

      {/* skills and experience section */}
      <section
        id="skill"
        className="flex flex-col items-center justify-center py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto text-center lg:px-[120px] px-10 ">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="mb-4 text-black dark:text-white lg:text-h2 text-h2-sm md:text-h2-sm"
          >
            Skills & Experience
          </motion.h2>
          <motion.p 
          variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
          className="mb-12 text-gray-600 lg:text-subtopic dark:text-gray-300">
            Technologies I work with and professional experience
          </motion.p>

          {/* Skills Grid */}
          <motion.div
           variants={textVariant(0.24)}
            initial="hidden"
            whileInView="show"
           className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
            {skillData.map((item, index) => (
              <SkillCo key={index} skill={item.skill} detail={item.detail} />
            ))}
          </motion.div>

          <motion.div
           variants={textVariant(0.25)}
            initial="hidden"
            whileInView="show"
           className="mt-8 mb-10 lg:w-full lg:mt-8">
            <Experienceco
              role=" Frontend Developer"
              company="TechCo."
              years="2024"
              description="Worked 6 months on few frontend projects, developing responsive user interfaces, building reusable components, and ensuring cross-browser compatibility. Collaborated with designers and backend teams to deliver high-quality web applications."
            />
          </motion.div>

          <motion.div 
           variants={textVariant(0.26)}
            initial="hidden"
            whileInView="show"
          className="flex flex-col items-center justify-center gap-6 mt-15 ">
            <h2 className="text-black dark:text-white lg:text-h2 text-h2-sm">
              Experience with Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4 ">
              {Technology.map((item, index) => (
                <TechnologyCo key={index} title={item.title} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* project section */}
      <section
        id="projects"
        className="container py-5  min-h-screen mx-auto px-4 lg::px-[120px] mt-10 md:mb-20"
      >
        <div className="flex flex-col gap-2 mb-3 text-center">
          <motion.h2
           variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
           className="text-black dark:text-white lg:text-h2 text-h2-sm">
            Projects
          </motion.h2>
          <motion.p 
           variants={textVariant(0.21)}
            initial="hidden"
            whileInView="show"
          className="text-gray-600 dark:text-gray-300">
            Selected projects demonstrating my technical skills and
            problem-solving abilities
          </motion.p>
        </div>
        <motion.div
         variants={textVariant(0.22)}
            initial="hidden"
            whileInView="show"
         className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
          {/* Project component assumed to handle its own dark mode styling internally */}
          <Project
            image={caraimage}
            ProjectName="CARA(e-commerce web application)"
            ProjectDetails=" A dynamic e-commerce web application for a trendy clothing brand. I designed and developed this fully responsive online store to deliver a smooth and visually appealing shopping experience, allowing users to browse, filter, and purchase stylish outfits effortlessly across all devices."
            Technology={["HTML", "CSS", "Js"]}
            liveUrl="https://sasangaviraj.github.io/carn/"
            githubUrl="https://github.com/Sasangaviraj/carn.git"
          />

          <Project
            image={educaimage}
            ProjectName="Pearth Univercity"
            ProjectDetails="Tech Educa is a modern, responsive website I built to showcase courses, blogs, and institutional details. With a focus on a clean user interface and seamless cross-device compatibility, the site delivers an enhanced user experience for academic exploration."
            Technology={["HTML", "CSS", "Js"]}
            liveUrl=" https://sasangaviraj.github.io/TechEduca-IWT/"
            githubUrl="https://github.com/Sasangaviraj/TechEduca-IWT.git"
          />

          <Project
            image={startup}
            ProjectName="Marketing Web Agency "
            ProjectDetails="I created the front-end for a marketing website designed to help new startups grow. The project focuses on a clean, responsive, and professional design, showcasing my ability to translate visual concepts into a functional, user-friendly interface."
            Technology={[
              "React",
              "Tailwind css",
              "Swiper.js",
              "Framer Motion",
              "Node js",
              "React Icons",
            ]}
            liveUrl="https://sasangaviraj.github.io/Web_Agency/"
            githubUrl="https://github.com/Sasangaviraj/startup.git"
          />

          <Project
            image={amayacoffeimage}
            ProjectName="AMAYA-Coffee Shop "
            ProjectDetails="I created a fully responsive e-commerce web application for a coffee shop, delivering a smooth and dynamic user experience. The application features a clean user interface that allows customers to effortlessly browse products, add items to their cart, and complete secure purchases. The backend is powered by Node.js and Firebase for robust data handling and secure user authentication."
            Technology={[
              "React",
              "Tailwind css",
              "MUI",
              "Framer Motion",
              "Node Js",
              "Express",
              "MongoDB",
              "Firebase",
            ]}
            liveUrl="https://sasangaviraj.github.io/AMAYA_COFFESHOP/"
            githubUrl="https://github.com/Sasangaviraj"
          />
        </motion.div>
      </section>

      {/* get in touch */}
      <section
        id="about"
        className="py-20 mt-10 transition-colors duration-300 bg-gray-100 border-b border-gray-200 lg:mb-15 dark:bg-gray-800 dark:border-gray-700"
      >
        <motion.div 
         variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
        className="flex flex-col gap-2 container mx-auto text-center px-4 md:px-4 lg::px-[150px]">
          <h2 className="text-black dark:text-white lg:text-h2 text-h2-sm">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 px-4 md:px-[100px] mb-5 lg:text-button-main text-hero-p">
            Looking for a frontend developer? Let's discuss your project and see
            how I can help bring your ideas to life.
          </p>

          <div className="flex items-center justify-center py-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
              <GetInT
                icon={<FiMail />}
                label="virajjayakodi1998@gmail.com" // Corrected prop name from 'lable' to 'label'
                link="mailto:virajjayakodi1998@gmail.com"
              />
              <GetInT
                icon={<LuPhone />}
                label="+94 76 058 3995" 
                link="+94 76 058 3995"
              />
              <GetInT
                icon={<FiLinkedin />}
                label="LinkedIn" // Corrected prop name and label for clarity
                link="www.linkedin.com/in/sasanga-viraj-346703348"
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-black border border-gray-400 rounded-lg shadow-none cursor-pointer text-button-p hover:shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-md">
              Back to Top
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

// skill component
const SkillCo = ({ skill, detail }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-4 transition-colors duration-300 bg-white border border-gray-200 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-xl">
      <h3 className="mb-1 font-semibold text-black lg:text-button-main text-hero-p dark:text-white">
        {skill}
      </h3>
      <p className="text-gray-600 lg:text-link text-button-p dark:text-gray-300">
        {detail}
      </p>
    </div>
  );
};

// Experience component
const Experienceco = ({ role, company, years, description }) => {
  return (
    <div className="p-4 transition-colors duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:shadow-md">
      <div className="flex flex-col items-start justify-between mb-2 sm:flex-row sm:items-center">
        <div className="text-left">
          <h3 className="text-black dark:text-white text-link">{role}</h3>
          <p className="text-black dark:text-gray-200 text-link">{company}</p>
        </div>
        <div className="px-2 mt-2 font-medium text-black transition-colors duration-300 bg-white border border-gray-400 rounded-lg text-button-p whitespace-nowrap sm:mt-2 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
          {years}
        </div>
      </div>
      <p className="mt-4 text-left text-gray-600 text-button-p dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

// Technology component
const TechnologyCo = ({ logo, title }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-4 py-1 text-white transition-colors duration-300 bg-gray-400 rounded-lg cursor-pointer text-button-p dark:bg-gray-600 dark:text-white">
      {logo}
      {title}
    </button>
  );
};

// Get in touch component
const GetInT = ({ icon, label, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col lg:w-[350px] h-[80px] w-[200px]  justify-center gap-1 p-3 transition-colors duration-300 bg-white border border-gray-200 rounded-lg cursor-pointer items-center hover:shadow-md dark:bg-gray-700 dark:border-gray-600 dark:hover:shadow-xl"
    >
      <div className="mb-1 text-xl text-black dark:text-white">{icon}</div>
      <p className="text-gray-600 text-button-p dark:text-gray-300">{label}</p>
      {/* <p className="text-black dark:text-white text-button-p">{link}</p> */}
    </a>
  );
};
