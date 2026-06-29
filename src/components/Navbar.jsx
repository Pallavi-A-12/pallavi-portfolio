function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Pallavi<span className="text-cyan-400">.</span>Dev
                </h1>
                <ul className="hidden md:flex gap-8 font-medium">
                    <li>
                        <a href="#home" className="hover:text-cyan-400">
                            Home
                         </a>   
                    </li>
                    <li>
                        <a href="#about" className="hover:text-cyan-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Skills" className="hover:text-cyan-400">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-cyan-400">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-cyan-400">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;