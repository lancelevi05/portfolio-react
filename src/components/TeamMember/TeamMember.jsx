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
          <ul className="education-list">
            {Array.isArray(member.contact) ? (
              member.contact.map((school, index) => (
                <li key={index}>{school}</li>
              ))
            ) : (
              <li>{member.contact}</li>
            )}
          </ul>
          
          <p>{member.department}</p>
        </div>

        <div className="sidebar-section">
  <h3>Skills</h3>

  <div className="skills-grid">
    {member.skills.map((skill, index) => (
      <div key={`${skill.name}-${index}`} className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
    ))}
  </div>

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
          <ul className="education-list">
            {Array.isArray(member.education) ? (
              member.education.map((school, index) => (
                <li key={index}>{school}</li>
              ))
            ) : (
              <li>{member.education}</li>
            )}
          </ul>
        </section>

      </section>

    </main>
);
}
