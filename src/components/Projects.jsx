import cloudImg from "../assets/images/cloud_service.png";
import weatherImg from "../assets/images/weather_app.jpg";
import studentImg from "../assets/images/sms.png";
import portfolioImg from "../assets/images/portfolio.png";
import { FaGithub } from "react-icons/fa";


function Projects() {

    const projects = [
        {
            title: "Student Management System",
            image: studentImg,
            description:
            "A full-stack web application for managing student records with complete CRUD operations.",
            tech:["Java", "Spring Boot", "Spring data JPA", "HTML5", "Bootstrap 4", "Maven", "MySQL", "Thymeleaf"],
            github:"https://github.com/Pallavi-A-12/Student-Management-System"
        },
        {
            title: "Secure Cloud Storage Service",
            image: cloudImg,
            description:
            "A secure cloud storage system with CP-ABE encryption for fine-grained access control.",
            tech:["Java", "Swing", "MySQL", "JDBC", "Cloud"],
            github:"https://github.com/Pallavi-A-12/AuditFreeCloudStorage"
        },
        {
            title: "Weather App",
            image: weatherImg,
            description:
            "A responsive weather application providing real-time forecasts using the Open-Meteo API.",
            tech:["React.js", "JavaScript (ES6+)", "Open-Meteo API", "Tailwind CSS", "Vite", "Responsive Design"],
            github:"https://github.com/Pallavi-A-12/weather-app"
        },
        {
            title: "Personal Portfolio",
            image: portfolioImg,
            description:
            "A modern portfolio website built to highlight my development projects and technical skills.",
            tech:["React", "Tailwind CSS", "Vite", "EmailJS", "JavaScript"],
            github:"https://github.com/Pallavi-A-12/pallavi-portfolio"
        }
    ];
    return (
        <section id="projects"
            className="py-24 bg-slate-900 text-white">
            
            <div className="max-w-6xl mx-auto px-6">
                 
                 <h2 className="text-4xl font-bold text-center mb-14">
                    My Projects
                 </h2>

                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {projects.map((projects) => (

                        <div key={projects.title}
                            className="
                                bg-slate-900 
                                rounded-2xl 
                                overflow-hidden 
                                border border-slate-700 
                                shadow-lg
                                hover:shadow-cyan-500/20 
                                hover:-translate-y-2 
                                hover:border-cyan-400 
                                transition-all
                                duration-300">

                            <img src={projects.image}
                                alt={projects.title}
                                className="w-full h-60 object-cover bg-slate-900 p-2">
                            </img>

                            <div className="p-6">

                                <h3 className="text-xl font-semibold">
                                    {projects.title}
                                </h3>

                                <p className="mt-4 text-slate-400 leading-7">
                                    {projects.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                
                                    {projects.tech.map((tech) => (
                                       <button
                                          key={tech}
                                          className="
                                            px-3
                                            py-1
                                            bg-cyan-500/10
                                            border
                                            border-cyan-400
                                            text-cyan-300
                                            rounded-full
                                            text-sm
                                            font-medium
                                            hover:bg-cyan-500
                                            hover:text-white
                                            transition-all
                                            duration-300
                                            cursor-default">
                                          {tech}
                                        </button> 
                                    ))}
                                </div>
                                <a href={projects.github}
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-cyan-400
                                        hover:text-cyan-300
                                        transition">
                                    <FaGithub size={20}/>
                                    Github Repository
                                </a>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
}

export default Projects;