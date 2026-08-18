import { profile } from '../data/profile.js'

export default function Contact() {
  const { github, linkedin, email, telegram } = profile.links

  const cards = [
    { label: 'GitHub', value: github, href: github },
    { label: 'LinkedIn', value: linkedin, href: linkedin },
    { label: 'Email', value: email, href: email ? `mailto:${email}` : '' },
    { label: 'Telegram', value: telegram, href: telegram },
  ].filter((c) => c.value)

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">07 · Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-desc">
            Reach out through any of these — configured in one place at{' '}
            <code>src/data/profile.js</code>.
          </p>
        </div>

        <div className="contact__grid">
          {cards.map((card) => (
            <a
              key={card.label}
              className="contact-card"
              href={card.href}
              target={card.label === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
            >
              <p className="contact-card__label">{card.label}</p>
              <p className="contact-card__value">{card.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
