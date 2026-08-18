import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 · About</p>
          <h2 className="section-title">Currently building</h2>
        </div>

        <div className="about__grid">
          <div className="about__card">
            <div className="about__card-row">
              <span className="about__card-label">status</span>
              <span className="about__card-value">Student</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">university</span>
              <span className="about__card-value">Inha University, Tashkent</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">year</span>
              <span className="about__card-value">3rd year</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">background</span>
              <span className="about__card-value">Software development</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">current focus</span>
              <span className="about__card-value">DevOps</span>
            </div>
            <div className="about__card-row">
              <span className="about__card-label">location</span>
              <span className="about__card-value">{profile.location}</span>
            </div>
          </div>

          <div className="about__text">
            <p>{profile.about}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
