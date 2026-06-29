import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroGirl from "../assets/images/hero_girl.png";

function Hero() {
    return (
       <section id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                
               <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                
                   <div className="md:w-1/2 text-center md:text-left">
                   
                        <p className="text-cyan-400 text-xl mb-4">
                           👋 Hello, I'm
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Pallavi
                            <span className="text-cyan-400"> Ande</span>
                        </h1>

                        <h2 className="text-2xl mt-6 font-semibold text-gray-300">
                            Java Full Stack Developer
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
                            Passionate about building scalable web applications
                            using Java, Spring Boot, React, MySQL, and Modern web technologies.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">

                            <a href="https://github.com/Pallavi-A-12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 
                                    rounded-full 
                                    bg-slate-800 
                                    flex items-center 
                                    justify-center 
                                    hover:bg-white 
                                    hover:text-black 
                                    transition-all 
                                    duration-300 
                                    hover:scale-110">
                                <FaGithub size={28} />
                            </a>

                            <a href="https://linkedin.com/in/pallaviande"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 
                                    rounded-full 
                                    bg-slate-800 
                                    flex items-center 
                                    justify-center 
                                    hover:bg-[#0A66C2] 
                                    hover:text-white 
                                    transition-all 
                                    duration-300 
                                    hover:scale-110">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                   </div> 

                   <div className="md:w-1/2 flelx justify-center">

                        <img src={heroGirl}
                            alt="Developer Girl"
                            className="w-[450px] 
                                rounded-full
                                object-cover
                                animate-float"/>
                   </div>
                </div> 
            </div>
        </section>    
    );
}

export default Hero;