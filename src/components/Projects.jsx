function Projects() {

    const projects = [
        {
            title:"Student Management System",
            description:
            "Developed a student management system project that allows users to manage student records, including adding, updating, and deleting student information.",
            tech:"Java, Spring Boot, Spring data JPA, Html, Bootstrap 4, Maven, MySQL, Thymeleaf",
            github:"https://github.com/Pallavi-A-12/Student-Management-System"
        },
        {
            title: "Audit-Free Cloud Storage",
            description:
            "Built a Secure cloud storage system using CP-ABE encryption concepts for privacy and access control.",
            tech:"Java, Swing, MySQL, JDBC, Cloud Storage",
            github:"https://github.com/Pallavi-A-12/AuditFreeCloudStorage"
        },
        {
            title: "Weather App",
            description:
            "Built a responsive weather forecasting application using React and the Open-Meteo API. Implemented real-time weather updates, location search, hourly and weekly forecasts, unit conversion.",
            tech:"React.js, JavaScript (ES6+), Open-Meteo API, Tailwind CSS, Vite, Responsive Design",
            github:"https://github.com/Pallavi-A-12/weather-app"
        },
    ];
    return (
        <section id="projects"
            className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                 <h2 className="text-4xl font-bold text-center mb-12">
                    Projects
                 </h2>
                 <div className="grid md:grid-cols-2 lg:grid gird-cols-3 gap-8">
                    {projects.map((projects) => (
                        <div key={projects.title}
                        className="bg-slate-800
                                    rounded-xl
                                    p-6
                                    shadow-lg
                                    hover:scale-105
                                    transition
                                    duration-300">
                            <h3 className="text-2xl font-semibold mb-4">
                                {projects.title}
                            </h3>
                            
                            <p className="text-gray-300 mb-4">
                                {projects.description}
                            </p>

                            <p className="text-cyan-400 mb-4">
                                {projects.tech}
                            </p>

                            <a href={projects.github}
                                className="inline-block
                                px-4 py-2
                                bg-cyan-500
                                rounded-lg
                                hover:bg-cyan-600"
                                rel="noreferrer"
                                target="_blank"
                            >
                                view project
                            </a>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
}

export default Projects;