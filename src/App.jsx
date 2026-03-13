import React from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import profile1 from "./assets/yuan.jpg";
import profile2 from "./assets/bonj.jpg";
import profile3 from "./assets/java1.jpg";


const teamMembers = [
  {
    id: "yuan-axl-alcuetas",
    name: "Yuan Axl Alcuetas",
    role: "Frontend Developer",
    image: profile1,
    studentId: "2023-0142",
    department: "BS Information Technology",
    yearLevel: "3rd Year",
    email: "yuan.alcuetas@example.com",
    skills: ["React", "JavaScript", "Responsive UI"],
    bio: "Builds polished and accessible interfaces, focused on clean user flows and maintainable components.",
  },
  {
    id: "jearwin-bonjibon",
    name: "Jearwin Bonjibon",
    role: "UI/UX Designer",
    image: profile2,
    studentId: "2023-0088",
    department: "BS Information Technology",
    yearLevel: "3rd Year",
    email: "jearwin@gmail.com",
    skills: ["Figma", "Design Systems", "User Research"],
    bio: "Designs intuitive layouts and visual systems that keep interfaces consistent and easy to use.",
  },
  {
    id: "lance-levi-java",
    name: "Lance Levi Java",
    role: "Backend Developer",
    image: profile3,
    studentId: "340992019",
    department: " CS Department",
    yearLevel: "3rd Year",
    email: "lancelevi052gmail.com",
    skills: ["Node.js", "REST API", "Database Design"],
    bio: "Handles server-side logic, data flows, and API reliability for seamless integration with frontend apps.",
  },
];

function HomePage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
   
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

      <section id="home" className="team-hero">
        <div>
          <h1>
            Meet Our <span className="gradient-text">Team</span>
          </h1>

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Click a member to view full profile details.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <Link key={member.id} className="member-link" to={`/team/${member.id}`}>
                <article className="member-card">
                  <div className="profile-circle">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>
            About <span className="gradient-text">Us</span>
          </h2>

          <p>
            We are a team of three students who work together to build websites and applications. We combine our ideas
            and skills to create simple, useful, and creative digital projects while learning new technologies.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
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

      <section id="contact" className="section">
        <h2>
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >
          <input className="input" type="text" placeholder="Your Name" required />

          <input className="input" type="email" placeholder="Your Email" required />

          <textarea className="input" placeholder="Your Message" required />

          <button className="btn-primary">Send Message</button>
        </form>
      </section>
    </>
  );
}

function TeamMemberPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find((item) => item.id === id);

  if (!member) {
    return (
      <main className="member-page">
        <div className="member-page-card">
          <h2>Member Not Found</h2>
          <p>This profile does not exist.</p>
          <button className="btn-primary" onClick={() => navigate("/")}>Go Back Home</button>
        </div>
      </main>
    );
  }

  return (
    <main className="member-page">
      <article className="member-page-card">
        <button className="back-link" onClick={() => navigate("/")}>Back to Team</button>

        <div className="member-header">
          <img src={member.image} alt={member.name} />
          <div>
            <h1>{member.name}</h1>
            <p className="member-role">{member.role}</p>
          </div>
        </div>

        <p className="member-bio">{member.bio}</p>

        <section className="id-grid">
          <div>
            <h3>Student ID</h3>
            <p>{member.studentId}</p>
          </div>
          <div>
            <h3>Department</h3>
            <p>{member.department}</p>
          </div>
          <div>
            <h3>Year Level</h3>
            <p>{member.yearLevel}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{member.email}</p>
          </div>
        </section>

        <section>
          <h3>Core Skills</h3>
          <div className="skills-wrap">
            {member.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team/:id" element={<TeamMemberPage />} />
    </Routes>
  );
}