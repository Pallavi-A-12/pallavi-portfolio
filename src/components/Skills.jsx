import oracleIcon from "../assets/icons/oracle.png";

function Skills() {

    const skills = [
        { name: "C", icon: "c"},
        { name: "Java", icon: "java" },
        { name: "Spring Boot", icon: "spring" },
        { name: "React", icon: "react"},
        { name: "javaScript", icon: "javascript" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "MySQL", icon: "mysql" },
        { name: "Oracle21" ,icon: oracleIcon , isLocal:true},
        { name: "Vite", icon: "vite" },
        { name: "Git", icon: "git" },
        { name: "GitHUb", icon: "github" },
        { name: "REST API", icon: "fastapi" },
    ];
    return (
        <section id="Skills"
            className="py-24 bg-slate-950 text-white">
            
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skills) => (
                        <div
                            key={skills.name}
                            className="bg-slate-900
                                        border border-slate-700
                                        rounded-2xl
                                        p-8
                                        flex flex-col
                                        items-center
                                        justify-center
                                        hover:shadow-cyan-500/20
                                        hover:-translate-y-2
                                        hover:border-cyan-400
                                        transition-all
                                        duration-300
                                        shadow-lg">
                            <img src={
                                        skills.isLocal
                                            ? skills.icon
                                            : `https://skillicons.dev/icons?i=${skills.icon}`}
                                alt={skills.name}
                                className="w-20 h-20"/>
                            <h3 className="mt-6 text-xl font-semibold text-white">
                                {skills.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;