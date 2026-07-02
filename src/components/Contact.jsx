import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";



function Contact() {

    const form = useRef();

    const[loading, setLoading] = useState(false);
    const[success, setSuccess] = useState("");
    const[error,setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const name= form.current.elements["name"].value.trim();
        const message= form.current.elements["message"].value.trim();

        if (!name || !message) {
            setError("❌ Please fill in all fields.");

            setTimeout( () => {
                setError("");
            }, 3000);

            return;
        }

        setLoading(true);
        setSuccess("");
        setError("");

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then( () => {
            setLoading(false);
            setSuccess("✅ Your message has been sent successfully!");

            form.current.reset();

            setTimeout( () => {
                setSuccess("");
            }, 4000);
        })
        .catch(() => {
            setLoading(false);

            setError("❌ Failed to send message. Please try again.");

            setTimeout( () => {
                setError("");
            }, 4000); 
        });
    };

    return (
        <section id="contact"
            className="py-24 bg-slate-950 text-white">
            
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Get In<span className="text-cyan-400"> Touch</span>
                </h2>
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 space-y-3">
                    {success && (
                        <div className="
                                bg-green-500
                                text-white
                                px-6
                                py-4
                                rounded-xl
                                shadow-2xl
                                transition-all
                                duration-500
                                ease-out">
                            {success}
                        </div>
                    )}

                    {error && (
                        <div className="
                                bg-red-500
                                text-white
                                px-6
                                py-4
                                rounded-xl
                                shadow-2xl
                                transition-all
                                duration-500
                                ease-out">
                            {error}
                        </div>
                    )}
                </div>

                <form ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6">

                    <input type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <textarea rows="5"
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <button type="submit"
                        disabled={loading}
                        className="w-35
                                    py-3
                                    rounded-lg
                                    hover:bg-cyan-600
                                    transition
                                    font-semibold
                                    flex
                                    justify-center
                                    items-center
                                    gap-3">
                            {loading ? (
                               <>
                                    <svg
                                        className="animate-spin h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                 r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"/>
                                        
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>

                                    </svg>
                                    Sending...
                               </> 
                            ) : (
                                "Send Message"
                            )}
                    </button>
                    
                </form>
            </div>
        </section>
    );
}

export default Contact;