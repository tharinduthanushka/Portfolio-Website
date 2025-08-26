'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, px } from 'framer-motion';
import { image, section } from 'framer-motion/client';
import { img } from 'framer-motion/m';
import Image from 'next/image';

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbzcARLGMYdoLd6Ue71mgdyBBEO6T9jbaw2BQyu5Pf8f0wliKkVrAcbdGGo1i0cx3niq/exec',
        {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.ok) {
        setStatus('✅ Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('❌ Network error.');
    }
  };



  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container">
      <Head>
        <title>Tharindu Kooragamage | Web Developer</title>
        <meta name="description" content="Personal portfolio of John Doe, Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <div className="pulse-effect">
            <div className='circle-text'>TK</div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
            
          </motion.div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input 
                type="checkbox" 
                id="checkbox" 
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="slider round"></div>
            </label>
            <span className="theme-text">{darkMode ? 'Dark' : 'Light'} Mode</span>
          </div>
        </div>
      </nav>
      <div className="your-container">
          <svg className="waves"
            xmlns="https://www.w3.org/2000/svg"
            xmlnsXlink="https://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="wave-pattern"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="animated-waves">
              <use href="#wave-pattern" x="48" y="0" fill="rgba(155,255,255,0.7"></use>
              <use href="#wave-pattern" x="48" y="3" fill="rgba(155,255,255,0.5)"></use>
              <use href="#wave-pattern" x="48" y="5" fill="rgba(155,255,255,0.3)"></use>
              <use href="#wave-pattern" x="48" y="7" fill="rgba(155,255,255,0.3)"></use>
            </g>
          </svg>
        </div>

      <main>
        {/* Home Section */}
        <section id="home" className="section home-section">
          <motion.div 
            className="home-content"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <motion.h1 variants={slideUp}>Tharindu Kooragamage</motion.h1>
            <motion.h2 variants={slideUp} transition={{ delay: 0.1 }}>Web Developer & UI/UX Enthusiast <img src="https://s14.gifyu.com/images/bNoCX.gif" alt="👋" className='home-gif' /></motion.h2>
            <motion.p variants={slideUp} transition={{ delay: 0.2 }}>
              I create beautiful, functional websites that deliver exceptional user experiences.
            </motion.p>
            <motion.div variants={slideUp} transition={{ delay: 0.3 }}>
              <a href="#projects" className="btn">View My Work</a>
              <a href="https://drive.google.com/file/d/1VoYrpS61ZNSXOTHuQ6rYZuHyohKJc-GM/view?usp=drive_link" target='_blank' className="btn" style={{ background: "#61cbb7" } as React.CSSProperties}>Download CV</a>
            </motion.div>
            <div className="social-links home-social-links">
             <a href="https://github.com/tharinduthanushka" target="_blank" rel="noopener noreferrer">GitHub</a>
             <a href="https://www.linkedin.com/in/tharindu-kooragamage-85a95b37b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
             <a href="mailto:itt2023004@tec.rjt.ac.lk.com">Email</a>
            </div>
          </motion.div>
          <div className="home-image">
            <motion.div 
                className="about-image"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="my-image-placeholder">
                  <img className='my-image' src="https://imglink.io/i/d7c6fbbf-da37-4eb0-8b6d-f0fbe06b5a88.jpg" alt="My Image" />
                </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="about-content">
              <motion.div 
                className="about-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>Hello! I'm Tharindu Kooragamage, a passionate web developer and UI/UX Designer.</p>
                <p>a University freshman diving into design principles, specializing in front-end development with React and Next.js.</p>
                <p>When I'm not coding, you can find me Gaming, reading sci-fi novels, or experimenting with new cooking recipes.</p>
                <p>My goal is to create web experiences that are not only visually appealing but also accessible and performant.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="project-image">
                    <div className="image-placeholder">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target='_blank'>GitHub</a>
                    <a href={project.demo} className="project-link" target='_blank'>demo</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h2>
            <div className="skills-container">
              {skillsCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3>{category.name}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <div className="contact-content">
              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href="mailto:itt2023004@tec.rjt.ac.lk.com">itt2023004@tec.rjt.ac.lk.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/tharindu-kooragamage-85a95b37b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tharindu</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">GitHub:</span>
                    <a href="https://github.com/tharinduthanushka" target="_blank" rel="noopener noreferrer">github.com/tharinduthanushka</a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="contact-form"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn">Send Message</button>
                <p>{status}</p>
              </form>
  
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Tharindu Kooragamage. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/tharinduthanushka" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/tharindu-kooragamage-85a95b37b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:itt2023004@tec.rjt.ac.lk.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    image: "/images/tourism web site.png",
    title: "Tourism Website",
    description: "A fully responsive Tourism platform with product filtering, cart functionalit.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tharinduthanushka/Tourism-Web-Site.git"
  },
  {
    image: "/images/radiant retro.jpg",
    title: "RADIANTS Retro",
    description: "A drag-and-drop task management application with user authentication and real-time updates.",
    technologies: ["REST API", "Next.js", "CSS", "Framer Motion"],
    github: "https://github.com/radiants03"
  },
  {
    image: '/images/password generator.png',
    title: "Password Generator",
    description: "A password generator application that displays a suitable password and lets you copy it",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/tharinduthanushka/Password-Generator.git",
    demo: "https://lolpasswordgenerator.netlify.app/",
  }
];

const skillsCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "MongoDB", "Firebase"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Figma", "Webpack", "Jest", "AWS", "Docker"]
  }
]
