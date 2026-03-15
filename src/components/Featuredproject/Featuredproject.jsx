import "./Featuredproject.css";

export default function Featuredproject() {
	return (
		<section id="projects" className="projects-section">
			<div className="container">
				<h2>
					Featured <span className="gradient-text">Projects</span>
				</h2>

				<div className="projects-grid">
					<div className="card">
						<h3>Student Violation System</h3>
						<p>
							Designed to track and manage student misconduct or rule-breaking incidents within an educational
							institution.
						</p>
					</div>

					<div className="card">
						<h3>Fitness Tracker</h3>
						<p>File reports then submit to the administrator and notify to the advisers.</p>
					</div>

					<div className="card">
						<h3>Analytics Dashboard</h3>
						<p>Real-time charts and business analytics visualization.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
