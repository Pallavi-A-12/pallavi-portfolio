function Skills() {

    const skills = [
        "Java",
        "Spring Boot",
        "React",
        "Javascript",
        "HTMl",
        "CSS",
        "MySQL",
        "Oracle21",
        "Git",
        "GitHub",
        "REST API"
    ];
    return (
        <section id="Skills"
            className="py-24 bg-slate-950 text-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid grid-cols-3 lg:grid grid-cols-5 gap-6">
                    {skills.map((skills) => (
                        <div
                            key={skills}
                            className="bg-slate-800
                                        rounded-xl
                                        p-6
                                        text-center
                                        hover:scale-105
                                        transition
                                        duration-300
                                        shadow-lg">
                            {skills}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;