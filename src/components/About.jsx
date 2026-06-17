import '../styles/about.css'

const skills = [
  'Java (Spring Boot)',
  'JavaScript (React, React Native)',
  'TypeScript',
  'Python (Django)',
  'React Native & Expo',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Docker',
  'REST APIs',
  'Git',
]

function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <div className="about__content">
        <p>
          I am a Software Engineering graduate who enjoys building products
          that make everyday work easier: mobile apps, operational dashboards,
          API-driven systems, and clean user flows. My strongest work sits at
          the point where backend reliability meets a simple, useful interface.
        </p>
        <p>
          During my 6-month internship at Codelantic, I worked on
          cross-platform React Native apps, reusable components, REST API
          integrations, Firebase services, and performance improvements. I am
          now looking for an Associate or Junior Software Engineer role where I
          can contribute to dependable, well-structured software.
        </p>
      </div>

      <dl className="about__highlights" aria-label="Career highlights">
        <div>
          <dt>6 months</dt>
          <dd>industry internship experience</dd>
        </div>
        <div>
          <dt>3 focus areas</dt>
          <dd>mobile, backend, and full-stack web</dd>
        </div>
        <div>
          <dt>Production-minded</dt>
          <dd>clean architecture, reviews, and maintainability</dd>
        </div>
      </dl>

      <div className="about__block">
        <h3>Technical skills</h3>
        <ul className="about__skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="about__block">
        <h3>Experience</h3>
        <article className="about__entry">
          <p className="about__entry-title">
            Software Engineering Intern - Codelantic
          </p>
          <p className="about__entry-meta">2025 - 2026</p>
          <ul>
            <li>
              Developed cross-platform mobile applications with React Native for
              Android and iOS.
            </li>
            <li>
              Built reusable UI components and integrated RESTful APIs with
              asynchronous data flows.
            </li>
            <li>
              Used Firebase services including FCM and Analytics for
              notifications and behavior tracking.
            </li>
            <li>
              Collaborated in Agile teams, participated in code reviews, and
              improved app performance and stability.
            </li>
          </ul>
        </article>
      </div>

      <div className="about__block">
        <h3>Education</h3>
        <article className="about__entry">
          <p className="about__entry-title">
            BSc (Hons) in Software Engineering
          </p>
          <p className="about__entry-meta">
            Cardiff Metropolitan University (via ICBT Campus) - 2025
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
