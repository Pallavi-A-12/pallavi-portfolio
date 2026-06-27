import { FaGithub, FaLinkedin } from "react-icons/fa";


function Hero() {
    return (
        <section id="home"
            className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
           <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-old mb-4">
                    Hi, I'm Pallavi
                </h1>
                <h2 className="text-2xl text-cyan-400 mb-6">
                    Java Full Stack Developer.
                </h2>
                <p className="max-w-xl mx-auto text-gray-300">
                    MCA Graduate passionate about java,
                    Spring Boot, React, MySQL and Building real-world web applications.
                </p>

                <br></br>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/Pallavi-A-12">
                        <FaGithub size={32}/>
                    </a>

                    <a href="https://www.linkedin.com/in/pallaviande">
                        <FaLinkedin size={32}/>
                    </a>
                    {/*
                    <a
                      href="/Pallavi_Ande_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-cyan-500 rounded-lg"
                    >
                      View Resume
                    </a> */}

                    <a
                      href="/Pallavi_Ande_Resume.pdf"
                      download="Pallavi_Ande_Resume.pdf"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        bg-cyan-500
                        hover:bg-cyan-600
                        rounded-lg
                        font-semibold
                        transition-all
                        duration-300">
                      Download Resume
                    </a>
                </div>

            </div> 
        </section>
    );
}

export default Hero;