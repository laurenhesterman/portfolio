import { HiOutlineCode, HiOutlineDatabase, HiOutlineColorSwatch, HiOutlineCog, HiOutlineExternalLink } from "react-icons/hi";
const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Redux", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "SVG"] },
    { category: "Data, APIs, & Auth", items: ["GraphQL", "RTK Query", "REST API", "Web Sockets", "Auth0", "AWS Cognito"] },
    { category: "Design Systems & Visualizations", items: ["Ant Design", "Tailwind CSS", "Photoshop", "Figma", "Material.ui", "Highcharts.js", "d3.js", "chart.js"] },
    { category: "Tools & Platforms", items: ["AWS", "Azure", "Jira", "Asana", "Datadog", "Pendo", "Git", "VS Code", "XCode", "Android Studio", "PWA"] }
  ];
  const skillIcons = [
    <HiOutlineCode className="text-primary-500 w-7 h-7" />,         // Frontend
    <HiOutlineDatabase className="text-primary-500 w-7 h-7" />,     // Data, APIs, & Auth
    <HiOutlineColorSwatch className="text-primary-500 w-7 h-7" />,  // Design Systems & Visualizations
    <HiOutlineCog className="text-primary-500 w-7 h-7" />,          // Tools & Platforms
  ];
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

<div className="grid lg:grid-cols-2 gap-12 items-start">
  {/* About Text */}
  <div className="space-y-6 self-start">
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I began my career in software development a bit unconventionally... After studying communications, journalism, and music in college and working for various record labels in LA, I discovered my knack for coding and love of software. After graduating from a coding bootcamp in Silicon Valley, I transitioned into tech and began my career in the startup world.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I'm currently a Senior Front-End Software Engineer at Butlr, where I build and maintain their space utilization and occupancy analytics platform.
        I've also been working on a passion project called LabeliQ, a mobile-first app that allows users to understand more about the quality of the food they are purchasing as well as it's ecological and political impact. I plan to launch this by the end of 2025.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">I place emphasis on proper coding techniques, thorough testing, and responsible AI use and assisted workflows. </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        When I'm not busy shipping code, you can find me playing cello, hiking in the Pacific Northwest, or attending a concert in Seattle.
      </p>
    </div>
  </div>

  {/* Skills Grid */}
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-1 border-primary-100 dark:border-primary-900/40 pb-2 flex items-center gap-3">
      <span className="inline-block">
        <HiOutlineCode className="inline-block text-primary-500 w-8 h-8 mr-2" />
      </span>
      Skills & Technologies
    </h3>
    <div className="grid sm:grid-cols-2 gap-6">
      {skills.map((skillGroup, index) => (
        <div
          key={index}
          className="card p-6 bg-white dark:bg-gray-900/60 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center gap-3 mb-3">
            <span>{skillIcons[index]}</span>
            <h4 className="font-semibold text-primary-700 dark:text-primary-300 text-lg tracking-wide">
              {skillGroup.category}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-normal transition-all duration-200 cursor-pointer hover:bg-primary-500 hover:text-white hover:scale-105 hover:shadow hover:font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
