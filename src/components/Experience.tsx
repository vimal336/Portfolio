// import { Briefcase, Calendar } from 'lucide-react';

// const experiences = [
//   {
//     title: 'Frontend Developer',
//     company: 'Tech Solutions Inc.',
//     period: '2022 - Present',
//     description: 'Leading the frontend development team, implementing modern web solutions, and mentoring junior developers.',
//     skills: ['React', 'TypeScript', 'Next.js'],
//   },
//   {
//     title: 'Frontend Developer',
//     company: 'Digital Innovations',
//     period: '2020 - 2022',
//     description: 'Developed responsive web applications and improved performance metrics by 40%.',
//     skills: ['React', 'Redux', 'Tailwind CSS'],
//   },
//   {
//     title: 'Junior Web Developer',
//     company: 'Creative Agency',
//     period: '2018 - 2020',
//     description: 'Created interactive websites and collaborated with designers to implement pixel-perfect designs.',
//     skills: ['JavaScript', 'HTML/CSS', 'jQuery'],
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-24 bg-gray-50 dark:bg-black">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>

//         <div className="max-w-4xl mx-auto relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-blue-200"></div>

//           {/* Experience items */}
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 md:mb-12 ${
//                 index % 2 === 0 ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

//               {/* Content */}
//               <div
//                 className={`md:w-1/2 ${
//                   index % 2 === 0 ? 'text-right md:pr-12' : 'md:pl-12'
//                 }`}
//               >
//                 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                   <div className="flex items-center gap-2 mb-2 text-blue-600">
//                     <Briefcase size={18} />
//                     <h3 className="text-xl font-semibold">{exp.title}</h3>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 mb-4">
//                     <Calendar size={16} />
//                     <span>{exp.period}</span>
//                   </div>
//                   <p className="text-gray-600 mb-4">{exp.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.skills.map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Spacer for symmetry */}
//               <div className="hidden md:block md:w-1/2"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

//export default Experience;

import React from "react";

type EducationDetails = {
  period: string;
  percentage: string;
  degree: string;
  institution: string;
};

type ExperienceDetails = {
  role: string;
  duration: string;
  company: string;
  tasks: string[];
};

const experiences: ExperienceDetails[] = [
  {
    role: "Front-End Developer",
    duration: "August 2024 - Present",
    company: "App Avengers.co",
    tasks: [
      "Developed and implemented CRUD (Create, Read, Update, Delete) API functionality using Firebase for the mobile application dashboard.",
      "Improved website responsiveness and optimized page load times across various devices.",
      "Ensured cross-browser compatibility for a seamless user experience on multiple platforms.",
      "Implemented wallet connection features with MetaWallet and Stellar Freighter, streamlining user interactions and improving transaction efficiency."
    ]
  },
  {
    role: "Front-End Developer",
    duration: "January 2024 - August 2024",
    company: "Aequalis Software Solutions Pvt Ltd Chennai",
    tasks: [
      "Developed responsive chat interfaces using ReactJS.",
      "Enhanced app performance by implementing React Query for API handling, leading to a 30% decrease in loading times, 20% increase in user retention, and a 10% boost in overall user satisfaction.",
      "Established real-time communication using WebSocket connections.",
      "Integrated Media Devices web APIs for audio messaging.",
      "Brought responsive websites for customers using semantic HTML5, JavaScript, ReactJS, and CSS.",
      "Worked on web development projects using HTML, CSS, and Bootstrap.",
      "Integrated RESTful APIs to fetch and display dynamic content, enhancing the interactivity of the application.",
      "Developed and maintained responsive web applications using React.js and Redux, improving performance and user experience."
    ]
  }
];

const educationDetails: EducationDetails[] = [
  {
    period: "2019-2021",
    percentage: "80%",
    degree: "MSc Computer Science",
    institution: "Arignar Anna Arts and Science College, Villupuram"
  },
  {
    period: "2016-2019",
    percentage: "74%",
    degree: "BSc Computer Science",
    institution: "Arignar Anna Arts and Science College, Villupuram"
  },
  {
    period: "2015-2016",
    percentage: "80%",
    degree: "Higher Secondary",
    institution: "Sacred Heart Convent of A.I Higher Secondary School, Villupuram"
  },
  {
    period: "2013-2014",
    percentage: "90%",
    degree: "SSLC",
    institution: "The New John Dewey Matriculation School, Villupuram"
  }
];

const EducationSection: React.FC = () => {
  return (
    <div className="bf" id="experience">
      <div className="education px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <main className="edurow-2">
          <section className="educol mb-8">
            <header className="title mb-4">
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Professional Experience</h1>
            </header>
            {experiences.map((exp, index) => (
              <div className="educontents mb-6" key={index}>
                <div className="edubox bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-black">{`${exp.role} - ${exp.duration}`}</h4>
                  <h3 className="text-md  text-blue-800 mb-2">{exp.company}</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-black">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="mb-1">{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-4 dark:text-white">Educational Details</h1>
          <main className="edurow grid grid-cols-1 sm:grid-cols-2 gap-8">
            <section className="educol">
              <header className="title mb-4">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">COLLEGE</h2>
              </header>
              {educationDetails.slice(0, 2).map((edu, index) => (
                <div className="educontents mb-4" key={index}>
                  <div className="edubox bg-white p-4 rounded-lg shadow-md  dark:text-black">
                    <h4 className="text-lg font-semibold text-black">{`${edu.period} - ${edu.percentage}`}</h4>
                    <h3 className="text-md text-blue-800 mb-2  dark:text-black">{edu.degree}</h3>
                    <p className="text-blue-800">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </section>
            <section className="educol">
              <header className="title mb-4">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">SCHOOL</h2>
              </header>
              {educationDetails.slice(2).map((edu, index) => (
                <div className="educontents mb-4" key={index}>
                  <div className="edubox bg-white p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-700  dark:text-black">{`${edu.period} - ${edu.percentage}`}</h4>
                    <h3 className="text-md text-gray-600 mb-2  dark:text-black">{edu.degree}</h3>
                    <p className="text-blue-800">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </main>
      </div>
    </div>
  );
};

export default EducationSection;
