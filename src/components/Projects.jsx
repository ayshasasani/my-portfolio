import '../styles/projects.css'

const projects = [
  {
    title: 'Loan & Expense Management System',
    tech: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    description:
      'Private client platform for loan lifecycles, repayments, expenses, and daily reporting, built with a modular API and a role-aware React dashboard.',
    proof: [
      'Loan creation, repayment tracking, and expense flows',
      'Role-based access, audit logging, and reporting views',
      'Typed frontend patterns for safer form-heavy workflows',
    ],
    primaryLink: '#contact',
    primaryLabel: 'Request case study',
    secondaryLink: '#contact',
    secondaryLabel: 'Confidential project',
    status: 'Private client system',
  },
  {
    title: 'Smart CRM Dashboard (AI-Powered)',
    tech: ['React', 'Django', 'MongoDB', 'Machine Learning'],
    description:
      'CRM dashboard concept that helps teams prioritize leads through scoring, sentiment signals, role-based workflows, and data-rich customer views.',
    proof: [
      'Lead scoring and sentiment analysis workflows',
      'Django API layer with MongoDB-backed customer records',
      'Dashboard views designed for scanning and decision-making',
    ],
    primaryLink: 'https://github.com/ayshasasani/Synera-Smart-CRM',
    primaryLabel: 'View GitHub',
    secondaryLink: '#contact',
    secondaryLabel: 'Discuss project',
    status: 'AI-assisted dashboard',
  },
  {
    title: 'Calling Agent Mobile App',
    tech: ['React Native', 'TypeScript', 'REST APIs'],
    description:
      'Company-owned internship mobile app for restaurant calling workflows, built around async actions, API integration, resilient state, and reusable UI components.',
    proof: [
      'Cross-platform Android and iOS implementation',
      'Retry-aware API flows and asynchronous task handling',
      'Reusable component structure for faster feature delivery',
    ],
    primaryLink: '#contact',
    primaryLabel: 'Request details',
    secondaryLink: '#contact',
    secondaryLabel: 'Company-owned work',
    status: 'Internship mobile app',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card">
            <div className="project-card__preview">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.status}</strong>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <ul className="project-card__tech" aria-label="Technologies">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{project.description}</p>
              <ul className="project-card__proof">
                {project.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-card__links">
                <a
                  href={project.primaryLink}
                  target={
                    project.primaryLink.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    project.primaryLink.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                >
                  {project.primaryLabel}
                </a>
                <a href={project.secondaryLink}>{project.secondaryLabel}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
