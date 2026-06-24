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
                <ul className="flex justify-center gap-4">
                    <li>
                        <button className="mt-8 px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600">
                            View Projects
                        </button>
                    </li>
                    <li>
                        <button className="mt-8 px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600">
                            Contact me
                        </button>
                    </li>
                </ul>
            </div> 
        </section>
    );
}

export default Hero;