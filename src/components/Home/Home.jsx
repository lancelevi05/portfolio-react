import { Link } from "react-router-dom";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Featuredproject from "../Featuredproject/Featuredproject";
import Navbar from "../Navbar/Navbar";
import { teamMembers } from "../../data/teamMembers";
import "./Home.css";



export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <section id="home" className="team-hero">
        <div>
          <h1>
            Meet Our <span className="gradient-text">Team</span>
          </h1>

          <p className="team-hero-subtitle">Click a member to view full profile details.</p>

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

      <About />
      <Featuredproject />
      <Contact />
    </>
  );
}
