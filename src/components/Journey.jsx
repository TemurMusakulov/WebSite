import { journeyStages, journeyNote } from '../data/journey.js'

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">05 · DevOps Journey</p>
          <h2 className="section-title">The path, as a commit log</h2>
          <p className="section-desc">
            How I&apos;m building toward DevOps, one stage at a time.
          </p>
        </div>

        <p className="journey__note">{journeyNote}</p>

        <div className="commit-graph">
          <div className="commit-graph__line" aria-hidden="true" />
          {journeyStages.map((item) => (
            <div className={`commit-node commit-node--${item.status}`} key={item.stage}>
              <div className="commit-node__dot-wrap">
                <div className="commit-node__dot" />
              </div>
              <div className="commit-node__body">
                <div className="commit-node__head">
                  <span className="commit-node__stage">{item.stage}</span>
                  <span className="commit-node__status">{item.status}</span>
                </div>
                <p className="commit-node__detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
