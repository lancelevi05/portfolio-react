import { useNavigate, useParams } from "react-router-dom";
import { teamMembers } from "../../data/teamMembers";
import "./TeamMember.css";

export default function TeamMember() {
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
  <main className="resume-layout">

    {/* LEFT SIDEBAR */}
    <aside className="resume-sidebar">
      <img
        src={member.image}
        alt={member.name}
        className="profile-img"
      />

      <h2>{member.name}</h2>
      <p className="sidebar-role">{member.role}</p>

      <div className="sidebar-section">
        <h3>Contact</h3>
        <p>{member.email}</p>
        <p>{member.studentId}</p>
        <p>{member.department}</p>
      </div>

      <div className="sidebar-section">
        <h3>Skills</h3>
        {member.skills.map(skill => (
          <div key={skill} className="skill-bar">
            <span>{skill}</span>
            <div className="bar">
              <div className="bar-fill"></div>
            </div>
          </div>
        ))}
      </div>
    </aside>

    {/* RIGHT CONTENT */}
    <section className="resume-content">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      <header className="resume-header">
        <h1>{member.name}</h1>
        <h4>{member.role}</h4>
      </header>

      <section className="resume-section">
        <h2>About Me</h2>
        <p>{member.bio}</p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p>{member.yearLevel}</p>
        <p>{member.department}</p>
      </section>

    </section>

  </main>
);
}
