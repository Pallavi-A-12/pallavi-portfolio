function Contact() {
    return (
        <section id="contact"
            className="py-24 bg-slate-950 text-white">
            
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Contact Me
                </h2>

                <form className="space-y-6">

                    <input type="text"
                        placeholder="Your Name"
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <input type="email"
                        placeholder="Your Email"
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <textarea rows="5"
                        placeholder="Your Message"
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <button type="submit"
                        className="px-6
                        py-3
                        bg-cyan-500
                        rounded-lg
                        hover:bg-cyan-600">
                            send Message
                    </button>
                    
                </form>
            </div>
        </section>
    );
}

export default Contact;