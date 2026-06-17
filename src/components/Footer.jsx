function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} Aysha Sasani. All rights reserved.</p>
      <p className="footer__links">
        <a href="mailto:imsasani11@gmail.com">Email</a>
        {' - '}
        <a
          href="https://github.com/ayshasasani"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {' - '}
        <a
          href="https://linkedin.com/in/aysha-sasani-00a68128a"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  )
}

export default Footer
