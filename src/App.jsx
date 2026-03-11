// Import React (needed for JSX)
import React from "react";

// Import your CSS styles
import "./App.css";
import profile1 from './assets/yuan.jpg';
import profile2 from './assets/bonj.jpg';
import profile3 from './assets/java1.jpg';

export default function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  const member1 = "Yuan Axl Alcuetas";
  const memberrole1 = "Frontend Developer";

  const member2 = "Yuan Axl Alcuetas";
  const memberrole2 = "Frontend Developer";

 
  const member3 = "Yuan Axl Alcuetas";
  const memberrole3 = "Frontend Developer";


  

  return (
    <>

      <nav className="navbar">
        <div className="nav-inner container">

          {/* Logo / Title */}
          <h2 className="gradient-text">Portfolio</h2>

          {/* Navigation buttons */}
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
      Group Portfolio Presentation
    </p>

    <div className="team-grid">

   
      <div className="member-card">
        <div className="profile-circle"><img src={profile1}></img></div>
        <div className="member-name">{member1}</div>
        <div className="member-role">{memberrole1}</div>
      </div>

      <div className="member-card">
        <div className="profile-circle"><img src={profile2}></img></div>
        <div className="member-name">Jearwin Bonjibon</div>
        <div className="member-role">UI/UX Designer</div>
      </div>

  
      <div className="member-card">
        <div className="profile-circle"><img src={profile3}></img></div>
        <div className="member-name">Lance Levi Java</div>
        <div className="member-role">Backend Developer</div>
      </div>

    </div>
  </div>
</section>

      <section id="about" className="section">
        <div className="container">

          <h2>
            About <span className="gradient-text">Us</span>
          </h2>

          <p>
We are a team of three students who work together to build websites and applications. We combine our ideas and skills
 to create simple, useful, and creative digital projects while learning new technologies.
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
              <h3>E-Commerce Platform</h3>
              <p>Online store with payment integration and inventory system.</p>
            </div>

            <div className="card">
              <h3>Fitness Tracker</h3>
              <p>Mobile app for tracking workouts and health progress.</p>
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
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault(); 
            alert("Message sent successfully!");
          }}
        >

          <input
            className="input"
            type="text"
            placeholder="Your Name"
            required
          />


          <input
            className="input"
            type="email"
            placeholder="Your Email"
            required
          />

 
          <textarea
            className="input"
            placeholder="Your Message"
            required
          />

          <button className="btn-primary">
            Send Message
          </button>
        </form>

      </section>
    </>
  );
}