import profileImage from "../assets/images/profile.png";

function About() {
    return(
        <section id="about"
            className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="flex justify-center md:w-1/3">

                        <img
                          src={profileImage}
                          alt="Pallavi Ande"
                          className="
                                w-72
                                h-72
                                rounded-full
                                object-cover
                                border-4
                                border-cyan-500
                                shadow-2xl
                                hover:scale-105
                                transition
                                duration-500"/>
                    </div>

                    <div className="md:w-2/3">
                        <h3 className="text-3xl font-bold mb-6">
                          Hi, I'm Pallavi 👋
                        </h3>
                        <p className="text-gray-300 leading-8 text-lg">
                          I am an MCA graduate and aspiring Java Full Stack Developer with
                          a strong passion for building modern web applications.
                          I enjoy solving real-world problems using Java, Spring Boot,
                          React, MySQL, HTML, CSS, and JavaScript.
                          <br /><br />
                          I continuously improve my skills by working on practical
                          projects, solving coding challenges, and learning modern
                          development technologies.
                        </p>
                        <br></br>
                        <a  href="/Pallavi_Ande_Resume.pdf"
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
                            ⬇ Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;