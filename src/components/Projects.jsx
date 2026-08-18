import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 · Projects</p>
          <h2 className="section-title">Selected projects</h2>
          <p className="section-desc">
            A mix of applications built while studying — links point to source/demo where available.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              {project.tech.length > 0 && (
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span className="skill-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-card__links">
                {project.github ? (
                  <a
                    className="project-card__link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="project-card__placeholder">GitHub link coming soon</span>
                )}
                {project.demo && (
                  <a
                    className="project-card__link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
