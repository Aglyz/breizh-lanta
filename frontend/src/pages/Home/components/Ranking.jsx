import './Ranking.css'

function Ranking() {
  return (
    <section className="row mt-4">
      <div className="row mb-3">
        <h1 className="text-center">Classement</h1>
      </div>
      <div className="row mb-5 px-5">
        <div className="ranking-show-container">
          <div className="podium second">
            <div className="podium-team mb-4">
              <img className="mt-auto"></img>
            </div>
            <div className="podium-pillar purple">
              <span className="podium-name">L'Ordre des Spirales</span>
              <span className="podium-rank mt-auto">2</span>
            </div>
          </div>
          <div className="podium first">
            <div className="podium-team mb-4">
              <img className="mt-auto"></img>
            </div>
            <div className="podium-pillar pink">
              <span className="podium-name">Les Pétoncles d'Aurore</span>
              <span className="podium-rank mt-auto">1</span>
            </div>
          </div>
          <div className="podium third">
            <div className="podium-team mb-4">
              <img className="mt-auto"></img>
            </div>
            <div className="podium-pillar blue">
              <span className="podium-name">Les Marées Profondes</span>
              <span className="podium-rank mt-auto">3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column">
          <div className="podium-line green mb-3">
            <img className="team-logo mt-auto me-3"></img>
            <span className="podium-name">Les Conques d'Émeraude</span>
            <span className="podium-rank ms-auto">4</span>
            <div className="podium-bg"></div>
          </div>
          <div className="podium-line red mb-3">
            <img className="team-logo mt-auto me-3"></img>
            <span className="podium-name">Les Tridacnes</span>
            <span className="podium-rank ms-auto">5</span>
            <div className="podium-bg"></div>
          </div>
          <div className="podium-line yellow mb-3">
            <img className="team-logo mt-auto me-3"></img>
            <span className="podium-name">Les Nautiles Dorées</span>
            <span className="podium-rank ms-auto">6</span>
            <div className="podium-bg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ranking