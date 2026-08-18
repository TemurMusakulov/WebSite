import { profile } from '../data/profile.js'

export default function Hero() {
  const { github, linkedin } = profile.links

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div>
          <p className="hero__prompt">
            <span>temur@devops</span>:~$ whoami
          </p>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__subtext">{profile.subtext}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            {github && (
              <a className="btn" href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {linkedin && (
              <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>

          <div className="hero__tech">
            {profile.heroTech.map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-bar">
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-title">status.yaml</span>
          </div>
          <div className="hero__panel-body">
            <div className="hero__panel-line">
              <span className="k">role:</span> <span className="s">&quot;software-engineer&quot;</span>
            </div>
            <div className="hero__panel-line">
              <span className="k">focus:</span> <span className="s">&quot;devops&quot;</span>
            </div>
            <div className="hero__panel-line">
              <span className="k">stack:</span>
            </div>
            <div className="hero__panel-line">
              &nbsp;&nbsp;<span className="c">-</span> docker
            </div>
            <div className="hero__panel-line">
              &nbsp;&nbsp;<span className="c">-</span> kubernetes
            </div>
            <div className="hero__panel-line">
              &nbsp;&nbsp;<span className="c">-</span> ci/cd
            </div>
            <div className="hero__panel-line">
              <span className="k">status:</span> <span className="s">&quot;learning-in-public&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
