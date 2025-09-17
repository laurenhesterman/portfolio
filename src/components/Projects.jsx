import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState({});
  const [swiperInstances, setSwiperInstances] = useState({});

  const handleImageClick = (image, projectTitle) => {
    setSelectedImage({ src: image, title: projectTitle });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const togglePause = (projectId) => {
    const swiper = swiperInstances[projectId];
    if (swiper) {
      if (isPaused[projectId]) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
      setIsPaused(prev => ({ ...prev, [projectId]: !prev[projectId] }));
    }
  };

  const projects = [
     {
      id: 1,
      title: "Butlr - Space Utilization & Occupancy Analytics",
      description: "A comprehensive analytics dashboard for real-time occupancy monitoring and fleet management. Features interactive data visualizations, actionable insights, live occupancy tracking, and advanced analytics for space utilization optimization and operational efficiency.",
      images: [
        "/src/components/images/butlr/image (13).png",
        "/src/components/images/butlr/image (7).png",
        "/src/components/images/butlr/image (14).png",
        "/src/components/images/butlr/image (8).png",
        "/src/components/images/butlr/image (15).png",
        "/src/components/images/butlr/image (9).png",
        "/src/components/images/butlr/image (3).png",
        "/src/components/images/butlr/image (5).png",
        "/src/components/images/butlr/image (6).png",
        "/src/components/images/butlr/image (10).png",
        "/src/components/images/butlr/image (16).png",
        "/src/components/images/butlr/image (11).png",
        // "/src/components/images/butlr/image (13).png",
        // "/src/components/images/butlr/image (14).png"
      ],
      technologies: ["React", "TypeScript", "Redux", "Web Sockets", "Highcharts.js", "SVG/Canvas", "Tailwind CSS","GraphQL", "REST API", "Auth0"],
      liveUrl: "https://taskmanager-demo.com", 
      githubUrl: "https://github.com/johndoe/task-manager",
      featured: true
    },
   
    {
      id: 2,
      title: "LabeliQ - Food Quality Analysis Platform",
      description: "An intelligent food quality analysis platform that analyzes food labels and ingredients to provide easy-to-understand quality scores, allergen alerts, and personalized health recommendations. Features tailored insights for various health concerns and dietary restrictions, transforming complex nutritional data into actionable guidance for better food choices.",
      images: [
        "/src/components/images/labeliq/1.png",
        "/src/components/images/labeliq/2.png",
        "/src/components/images/labeliq/3.png",
        "/src/components/images/labeliq/4.png",
        "/src/components/images/labeliq/5.png",
        "/src/components/images/labeliq/6.png",
        "/src/components/images/labeliq/7.png"
      ],
      technologies: ["React", "TypeScript", "Ionic", "Open AI API"],
      liveUrl: "https://labeliq-demo.com",
      githubUrl: "https://github.com/laurenhesterman/labeliq",
      featured: true
    },
    {
      id: 3,
      title: "StormSensor - Stormwater monitoring Dashboard",
      description: "A comprehensive weather monitoring system with real-time storm tracking, sensor data visualization, and predictive analytics. Features interactive maps and alert systems for severe weather conditions.",
      images: [
        "/src/components/images/stormsensor/1.png",
        "/src/components/images/stormsensor/2.png",
        "/src/components/images/stormsensor/3.png",
        "/src/components/images/stormsensor/4.png",
        "/src/components/images/stormsensor/5.png",
        "/src/components/images/stormsensor/6.png",
        "/src/components/images/stormsensor/7.png",
        "/src/components/images/stormsensor/8.png",
        "/src/components/images/stormsensor/9.png",
        "/src/components/images/stormsensor/10.png",
        "/src/components/images/stormsensor/11.png",
        "/src/components/images/stormsensor/12.png",
        "/src/components/images/stormsensor/13.png",
        "/src/components/images/stormsensor/14.png",
        "/src/components/images/stormsensor/15.png",
        "/src/components/images/stormsensor/16.png"
      ],
      technologies: ["Angular", "TypeScript", "Highcharts", "SCSS", "D3.js", "AWS Cognito", "PostgreSQL"],
      liveUrl: "https://stormsensor-demo.com",
      githubUrl: "https://github.com/laurenhesterman/storm-sensor",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 sm:space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 grid-cols-1 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image Carousel */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden shadow-xl">
                    {/* Pause/Play Button */}
                    <button
                      onClick={() => togglePause(project.id)}
                      className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      {isPaused[project.id] ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      )}
                    </button>
                    
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      onSwiper={(swiper) => {
                        setSwiperInstances(prev => ({ ...prev, [project.id]: swiper }));
                      }}
                      className="w-full h-64 sm:h-80"
                    >
                      {project.images.map((image, imageIndex) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="w-full h-full bg-gray-900 dark:bg-gray-950 flex items-center justify-center">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${imageIndex + 1}`}
                              className="max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                              onClick={() => handleImageClick(image, project.title)}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
{/* 
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-12 left-0 text-white text-sm max-w-full truncate">
              {selectedImage.title}
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
