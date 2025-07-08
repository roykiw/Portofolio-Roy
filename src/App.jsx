import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);

    const canvas = document.getElementById('nebula-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: 0.2 + Math.random() * 0.5,
      }));

      function drawNebula() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 1.5
        );
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let star of stars) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,255,255,${star.alpha})`;
          ctx.fill();
          star.y -= star.speed;
          if (star.y < 0) star.y = canvas.height;
        }

        requestAnimationFrame(drawNebula);
      }

      drawNebula();
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Interactive Landing Page",
      description: "A responsive landing page with animation and theme toggle.",
    },
    {
      title: "Article App",
      description: "React app that fetches live article data.",
    },
    {
      title: "Portfolio Website",
      description: "The site you're currently viewing! Built using React.",
    },
  ];

  return (
    <div style={{ ...styles.container, opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
      <canvas id="nebula-canvas" style={styles.nebulaBackground}></canvas>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLinks}>
          <button onClick={() => scrollToSection("home")} style={styles.navLink} className="nav-anim">Home</button>
          <button onClick={() => scrollToSection("projects")} style={styles.navLink} className="nav-anim">Projects</button>
          <button onClick={() => scrollToSection("contact")} style={styles.navLink} className="nav-anim">Contact</button>
        </div>
      </nav>

      <header style={styles.header} id="home">
        <h1 style={styles.title}>Hi, I'm Julianus El Roy Ginting 🚀</h1>
        <p style={styles.subtitle}>Future Front-End Developer | Futuristic Web Designer</p>
        <div style={styles.links}>
          <a href="https://www.facebook.com/share/16ntv24fcv/" className="nav-anim" style={styles.iconLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/el_roy_09?utm_source=qr&igsh=OWQ1Y3J6Z2thNmJ5" className="nav-anim" style={styles.iconLink} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:julianuselroy722@gmail.com" className="nav-anim" style={styles.iconLink}>Email</a>
        </div>
      </header>

      <section id="projects">
        <h2 style={styles.sectionTitle}>🚧 Projects in the Future</h2>
        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                animation: `glowFadeIn 0.6s ease ${index * 0.2}s forwards`,
                opacity: 0,
              }}
            >
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardText}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer} id="contact">
        &copy; {new Date().getFullYear()} Julianus El Roy Ginting. Built from the future.
      </footer>

      <style>
        {`
          @keyframes glowFadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
              box-shadow: none;
            }
            to {
              opacity: 1;
              transform: translateY(0);
              box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
            }
          }

          .button-animated {
            transition: all 0.3s ease;
            background-color: #0ff;
            color: #000;
            font-weight: bold;
            border-radius: 4px;
          }

          .button-animated:hover {
            transform: scale(1.08);
            box-shadow: 0 0 12px #0ff, 0 0 25px #0ff;
          }

          .nav-anim {
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-anim::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: #0ff;
            transition: width 0.3s;
          }

          .nav-anim:hover::before {
            width: 100%;
          }

          .nav-anim:hover {
            color: #7ff;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    fontFamily: 'Orbitron, sans-serif',
    color: '#0ff',
    padding: 0,
    minHeight: '100vh',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    width: '100vw',
  },
  nebulaBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #0ff',
    width: '100%',
    boxSizing: 'border-box',
  },
  navBrand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0ff',
  },
  navLinks: {
    display: 'flex',
    gap: '25px',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#0ff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    textShadow: '0 0 10px #0ff',
  },
  title: {
    fontSize: '3.5rem',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#7ff',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  iconLink: {
    color: '#0ff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'color 0.3s',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.2rem',
    marginBottom: '30px',
    textShadow: '0 0 5px #0ff',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    width: '100%',
    padding: '0 40px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#111122',
    padding: '25px',
    borderRadius: '10px',
    border: '1px solid #0ff',
    transform: 'translateY(20px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginBottom: '10px',
    color: '#0ff',
  },
  cardText: {
    color: '#aaffff',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#0ff',
    color: '#000',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    fontSize: '0.9rem',
    color: '#777',
  },
};
