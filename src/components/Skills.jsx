import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 · Skills</p>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-desc">
            Tools and languages I&apos;ve worked with — organized by category, not by depth.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <p className="skill-card__title">{group.category}</p>
              <div className="skill-card__list">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
