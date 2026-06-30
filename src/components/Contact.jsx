import emailjs from "@emailjs/browser";
import { useRef } from "react";



function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        {/*emailjs.sendForm(
            "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )*/}

        emailjs.sendForm(
            "service_1kl8jox",
            "template_02w57hq",
            form.current,
            "jGevhmDvj7XBimDRf"
        )
        .then( () => {
            alert("Message sent successfully!");
            form.current.reset();
        })
        .catch((error) => {
            console.log(error);
            alert("Failed to send message.");
        });
    };

    return (
        <section id="contact"
            className="py-24 bg-slate-950 text-white">
            
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Contact Me
                </h2>

                <form ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6">

                    <input type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full
                        p-4
                        rounded-lg
                        bg-slate-800
                        outline-none"/>

                    <textarea rows="5"
                        name="message"
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