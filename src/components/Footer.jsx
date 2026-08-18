import { profile } from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} {profile.name}
        </p>
        <p className="footer__text">Built with React · Deployed with Docker</p>
      </div>
    </footer>
  )
}
