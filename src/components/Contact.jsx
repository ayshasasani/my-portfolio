import { useState } from 'react'
import '../styles/contact.css'

const EMAIL = 'imsasani11@gmail.com'
const PHONE = '+94 77 23 44 094'

function Contact() {
  const [copied, setCopied] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        Open to Associate and Junior Software Engineer opportunities,
        especially mobile, backend, and full-stack product teams.
      </p>

      <ul className="contact__links">
        <li>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
        <li>
          <a href="tel:+94772344094">{PHONE}</a>
        </li>
        <li>
          <a
            href="https://github.com/ayshasasani"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ayshasasani
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/aysha-sasani-00a68128a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="contact__actions">
        <button type="button" onClick={copyEmail}>
          {copied ? 'Email copied' : 'Copy email'}
        </button>
        <a href={`${import.meta.env.BASE_URL}aysha-sasani-resume.pdf`} download>
          Download CV
        </a>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" required />
        </label>
        <button type="submit">Send message</button>
      </form>
    </section>
  )
}

export default Contact
