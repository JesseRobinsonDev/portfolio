import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Logo from "../components/Logo";

export default function HomePage() {
  const [titleText, setTitleText] = useState("");
  const [jobTitleText, setJobTitleText] = useState("");
  const location = useLocation();
  const homeSectionRef = useRef();
  const aboutSectionRef = useRef();
  const skillsSectionRef = useRef();
  const projectsSectionRef = useRef();

  useEffect(() => {
    scrollToComponent();
    introText();
  }, []);

  useEffect(() => {
    scrollToComponent();
  }, [location]);

  function scrollToComponent() {
    var headerOffset = 72;
    var elementPosition = 0;
    var offsetPosition = 0;
    switch (window.location.hash) {
      case "#about":
        elementPosition = aboutSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      case "#skills":
        elementPosition = skillsSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      case "#projects":
        elementPosition =
          projectsSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      default:
        elementPosition = homeSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
    }
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  async function introText() {
    for (var i = 0; i <= "I am a ".length; i++) {
      const text = "I am a ".slice(0, i);
      setTitleText(text);
      await sleep(30);
    }
    for (var n = 0; n <= "<Fullstack/> Developer();".length; n++) {
      const text = "<Fullstack/> Developer();".slice(0, n);
      setJobTitleText(text);
      await sleep(65);
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div>
      <section ref={homeSectionRef} className="home-section">
        <div className="title">
          <h1>Hello, I am Jesse Robinson</h1>
          <h1>
            {titleText}
            <span className="job-title-text">{jobTitleText}</span>
            <i className="blinking-cursor">|</i>
          </h1>
        </div>
      </section>
      <Header scroll={scrollToComponent} />
      <section ref={aboutSectionRef}>
        <h2>About</h2>
        <div className="about-column-section">
          <div>
            <h3>Jesse Robinson</h3>
            <img height={256} width={256} src="./User.png" alt="User" />
            <p>
              Hello! My name is Jesse Robinson, I am a Web Developer from
              Canada. I strive to learn all that I can about programming and
              push the abilities of myself and of the tools I use. I love
              working on challanging projects, expanding my skills, and making
              my dreams become a reality.
            </p>
          </div>
          <div>
            <h3>Contact Me</h3>
            <ul className="contact-list">
              <li className="contact">
                <Logo src="./logos/Gmail.svg" alt="Email" />
                <span>Jesse Robinson</span>
              </li>
              <li className="contact">
                <Logo src="./logos/Github.svg" alt="Github" />
                <span>Jesse Robinson</span>
              </li>
              <li className="contact">
                <Logo src="./logos/LinkedIn.svg" alt="LinkedIn" />
                <span>Jesse Robinson</span>
              </li>
              <li className="contact">
                <Logo src="./logos/Twitter.svg" alt="Twitter" />
                <span>Jesse Robinson</span>
              </li>
              <li className="contact">
                <Logo src="./logos/Instagram.svg" alt="Instagram" />
                <span>Jesse Robinson</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section ref={skillsSectionRef}>
        <h2>Skills</h2>
        <h4>Frontend</h4>
        <ul className="logo-list">
          <Logo src="./logos/HTML.svg" alt="HTML" />
          <Logo src="./logos/CSS.svg" alt="CSS" />
          <Logo src="./logos/React.svg" alt="React" />
          <Logo src="./logos/NextJS.svg" alt="NextJS" />
          {/*
          <Logo src="./logos/Vue.svg" alt="React" />
          <Logo src="./logos/Nuxt.svg" alt="React" />
          */}
          <Logo src="./logos/TailwindCSS.svg" alt="TailwindCSS" />
        </ul>
        <h4>Backend</h4>
        <ul className="logo-list">
          {/*
          <Logo src="./logos/MySQL.svg" alt="React" />
          <Logo src="./logos/PostgreSQL.svg" alt="React" />
          */}
          <Logo src="./logos/MongoDB.svg" alt="MongoDB" />
          <Logo src="./logos/NodeJS.svg" alt="NodeJS" />
        </ul>
        <h4>Languages</h4>
        <ul className="logo-list">
          <Logo src="./logos/JavaScript.svg" alt="JavaScript" />
          {/*
          <Logo src="./logos/Java.svg" alt="React" />
          <Logo src="./logos/Golang.svg" alt="React" />
          <Logo src="./logos/CS.svg" alt="React" />
          <Logo src="./logos/Python.svg" alt="React" />
          */}
        </ul>
        <h4>Tools</h4>
        <ul className="logo-list">
          <Logo src="./logos/Git.svg" alt="Git" />
          <Logo src="./logos/Github.svg" alt="Github" />
          <Logo src="./logos/npm.svg" alt="npm" />
          <Logo src="./logos/VSCode.svg" alt="VSCode" />
        </ul>
      </section>
      <section ref={projectsSectionRef}>
        <h2>Projects</h2>
        <ul className="project-card-grid">
          <ProjectCard
            src="./Test.jpg"
            title="Portfolio"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="This website! Hosted on Vercel!"
            tags={[
              { src: "./logos/React.svg", text: "React" },
              { src: "./logos/CSS.svg", text: "CSS" },
              { src: "./logos/HTML.svg", text: "HTML" },
            ]}
          />
          <ProjectCard
            src="./Test.jpg"
            title="Cryptospy"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="A cryptocurrency tracker that gets the latest crypto data and news to view. And account system that you can connect your cryptocurrency information."
            tags={[
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/Solidity.svg", text: "Solidity" },
            ]}
          />
          <ProjectCard
            src="./Test.jpg"
            title="Coffee UI"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="A free UI component library for React, Vue, Angular, and Svelte. Built to be simple to use, modular, and responsive."
            tags={[
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/CSS.svg", text: "CSS" },
              { src: "./logos/React.svg", text: "React" },
              { src: "./logos/Vue.svg", text: "Vue" },
              { src: "./logos/Angular.svg", text: "Angular" },
              { src: "./logos/Svelte.svg", text: "Svelte" },
            ]}
          />
          <ProjectCard
            src="./Test.jpg"
            title="Socialink"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="A social media hub that allows users to connect all their accounts in one place."
            tags={[
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/HTML.svg", text: "HTML" },
            ]}
          />
          <ProjectCard
            src="./Test.jpg"
            title="PC Sales Tracker"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="A tracker that scours a variety of websites to track current prices, sales, and specifications of computers and computer components."
            tags={[
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/Python.svg", text: "Python" },
            ]}
          />
          <ProjectCard
            src="./Test.jpg"
            title="Articles.dev"
            github="https://jesserobinson.dev/"
            link="https://jesserobinson.dev/"
            description="A website that allows for making programming articles and tutorials."
            tags={[
              { src: "./logos/HTML.svg", text: "HTML" },
              { src: "./logos/HTML.svg", text: "HTML" },
            ]}
          />
        </ul>
      </section>
    </div>
  );
}
