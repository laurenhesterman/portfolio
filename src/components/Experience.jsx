const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Butlr",
      period: "Feb 2025 - Present",
      positions: [
        {
          title: "Senior Software Engineer",
          period: "Feb 2025 - Present"
        },
        {
          title: "Frontend Developer",
          period: "Feb 2023 - Feb 2025"
        }
      ],
      description: [
        "Developed and maintained core dashboard features and infrastructure using React, Redux, GraphQL, and RTK Query, collaborating cross-functionally with backend/API developers, UX/Product teams, and key stakeholders to deliver responsive, user-centered, and well tested code in a fast-paced environment.",
        "Owned and implemented a complete redesign of the dashboard and data visualizations, integrating Highcharts.js and the Ant design system. Determined project readiness steps, defined requirements, and coordinated development, resulting in improved data transparency, enhanced usability, and reduced tech debt.",
        "Compelted the overhaul of the REST API consumption from sagas to RTK Query, improving data fetching efficiency and reducing boilerplate code by about 5,000 lines.",
        "Oversaw and integrated the implementation of complex business logic into the application, while optimizing performance and reducing page load times by up to 50%.",
        "Monitored app health and user behavior via Datadog, Pendo, and custom dashboards; tracking user conversion metrics to guide product improvements and prioritize bug fixes.",
        "Managed weekly production releases, supported field installations, and created technical documentation to align engineering with user needs and improve product quality."
      ]
    },
    {
      title: "Software Developer",
      company: "StormSensor, Inc.",
      period: "May 2018 - Dec 2022",
      description: [
        "Developed and lead design on two separate products, internal tools and customer facing applications",
        "Designed and developed a unique and engaging user interface for customer interaction with their data using Angular 6-10, JavaScript, TypeScript, HTML, and SCSS",
        "Developed and deployed an app on iOS, Android and PWA using React.js, TypeScript",
        "Created custom data visualizations using various JavaScript frameworks including Highcharts, d3.js, chart.js, and Vizuly.js",
        "Participate in the sequence of UX/UI design to consistently improve the interface and accommodate database updates",
        "Serve as hiring manager to find, interview, and hire new qualified front-end candidates",
        "Serve as product owner to develop additional applications with an external University Capstone team",
        "Designed, developed, and deployed a second app to assist engineers with"
      ]
    },
    {
      title: "Designer and Social Media Director",
      company: "Ventura County Certified Farmers' Market Association",
      period: "Jan 2017 - Jul 2017",
      description: [
        "Design and produce advertisements for print and digital media consistent with company themes",
        "Participate in group brainstorming, peer-review, and proofreading",
        "Develop consistent and engaging social media content for the company on multiple platforms",
        "Converse and develop personal relationships with clients to provide the most relevant information"
      ]
    },
    {
      title: "Web Developer",
      company: "Freelance Web Development",
      period: "Aug 2015 - May 2018",
      description: [
        "Designed, built, and deployed custom websites for various groups according to individual requirements",
        "Developed skills for Amazon's Alexa (With over 400 unique users)",
        "Worked with Wordpress to redesign and rebuild website for non-profit organization",

      ]
    }
  ];

  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <a
            href="/Lauren Hesterman Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600 text-white text-sm font-semibold shadow hover:bg-primary-700 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 border border-primary-700/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="tracking-wide">Download Resume</span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                  {exp.positions && (
                    <div className="mt-2 space-y-1">
                      {exp.positions.map((position, posIndex) => (
                        <div key={posIndex} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {position.title}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 ml-4">
                            {position.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {!exp.positions && (
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
