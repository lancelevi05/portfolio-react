import "./Navbar.css";

export default function Navbar({ scrollToSection }) {
	return (
		<nav className="navbar">
			<div className="nav-inner container">
				<h2 className="gradient-text">Alter Zero</h2>

				<div className="nav-links">
					<button onClick={() => scrollToSection("home")}>Home</button>
					<button onClick={() => scrollToSection("about")}>About</button>
					<button onClick={() => scrollToSection("projects")}>Projects</button>
					<button onClick={() => scrollToSection("contact")}>Contact</button>
				</div>
			</div>
		</nav>
	);
}
