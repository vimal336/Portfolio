import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import todoimage from "../assets/images/todo.png";
import MovieBooking from "../assets/images/booking.png";
import Tour from "../assets/images/tour.png";
import Netflix from "../assets/images/netflix.png";


const projects = [
  {
    title: 'Netflix Clone',
    description: 'A Netflix Clone using React, redux and firebase',
    image: Netflix,
    tags: ['React', 'Redux', 'Firebase'],
    githubLink: 'https://github.com/vimal336/React-js-projects/tree/main/my-netflix-clone',
    liveLink: 'https://guileless-peony-2775b5.netlify.app'
  },
  {
    title: 'Mern ToDO APP',
    description: 'A Mern stack todo application',
    image: todoimage,
    tags: ['React', 'Express.js', 'Node.js', 'APIs', 'Mango DB'],
    githubLink: 'https://github.com/vimal336/mern-todo.com',
    liveLink: 'https://mern-todo-gold.vercel.app'
  },
  {
    title: 'React Movie Booking App',
    description: 'A React Movie Booking App',
    image: 'https://vimalportf.netlify.app/images/reactjs5.PNG',
    tags: ['React', 'Vite.js'],
    githubLink: 'https://my-react-movie-booking.netlify.app/',
    liveLink: 'https://github.com/vimal336/React-js-projects/tree/main/react-movie-booking'
  },
  {
    title: 'Shopping cart App',
    description: 'Shopping cart project using html, css and js',
    image: 'https://vimalportf.netlify.app/images/js3.png',
    tags: ['javscript', 'Html', 'CSS'],
    githubLink: 'https://github.com/vimal336/js-projects/tree/main/Shopping-Cart',
    liveLink: 'https://vimal336.github.io/js-projects/Shopping-Cart'
  },
  {
    title: 'Tour Website',
    description: 'Tour website project using html, css and js',
    image: Tour,
    tags: ['javscript', 'Html', 'CSS', 'Media Query'],
    githubLink: 'https://github.com/vimal336/js-projects/tree/main/TourWebsite',
    liveLink: 'https://vimal336.github.io/js-projects/TourWebsite'
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card group  dark:bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-black">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



