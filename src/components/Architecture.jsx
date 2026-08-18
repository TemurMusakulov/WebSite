import { Fragment } from 'react'
import { architectureFlow, architectureNote } from '../data/journey.js'

export default function Architecture() {
  return (
    <section id="architecture" className="section section--tight">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">06 · Architecture</p>
          <h2 className="section-title">Intended infrastructure flow</h2>
        </div>

        <div className="arch-flow">
          {architectureFlow.map((node, i) => (
            <Fragment key={node}>
              <span className="arch-flow__node">{node}</span>
              {i < architectureFlow.length - 1 && (
                <span className="arch-flow__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>

        <p className="arch-note">{architectureNote}</p>
      </div>
    </section>
  )
}
