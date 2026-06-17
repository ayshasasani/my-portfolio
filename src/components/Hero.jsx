import '../styles/hero.css'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__copy">
        <p className="hero__eyebrow">Associate / Junior Software Engineer</p>
        <h1 className="hero__title">Aysha Sasani</h1>
        <p className="hero__subtitle">
          Software Engineering graduate building mobile and full-stack products
          with React Native, Spring Boot, and REST APIs. I turn practical
          business workflows into reliable, usable software.
        </p>
        <div className="hero__actions" aria-label="Primary links">
          <a href="#projects" className="hero__cta">
            View work
          </a>
          <a
            href={`${import.meta.env.BASE_URL}aysha-sasani-resume.pdf`}
            className="hero__cta"
            download
          >
            Download CV
          </a>
          <a
            href="https://github.com/ayshasasani"
            className="hero__cta hero__cta--secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <img src={heroImage} alt="" />
        <div className="hero__panel">
          <span>React Native</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
