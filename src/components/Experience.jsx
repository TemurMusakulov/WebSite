import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 · Experience</p>
          <h2 className="section-title">Work experience</h2>
          <p className="section-desc">
            Roles held to date. Listed as they were — not reframed as software engineering work.
          </p>
        </div>

        <div className="exp-list">
          {experience.map((job) => (
            <div className="exp-item" key={`${job.company}-${job.period}`}>
              <p className="exp-item__period">{job.period}</p>
              <div>
                <p className="exp-item__role">{job.role}</p>
                <p className="exp-item__company">{job.company}</p>
                <p className="exp-item__desc">{job.description}</p>
                <span className="pill exp-item__tag">{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
