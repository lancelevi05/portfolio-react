import "./Contact.css";

export default function Contact() {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Message sent successfully!");
	};

	return (
		<section id="contact" className="contact-section">
			<h2>
				Let&apos;s <span className="gradient-text">Connect</span>
			</h2>

			<form className="form" onSubmit={handleSubmit}>
				<input className="input" type="text" placeholder="Your Name" required />
				<input className="input" type="email" placeholder="Your Email" required />
				<textarea className="input" placeholder="Your Message" required />
				<button className="btn-primary">Send Message</button>
			</form>
		</section>
	);
}
