import blueteam from '../../../assets/blanta-team-blue.svg'
import greenteam from '../../../assets/blanta-team-green.svg'
import pinkteam from '../../../assets/blanta-team-pink.svg'
import purpleteam from '../../../assets/blanta-team-purple.svg'
import redteam from '../../../assets/blanta-team-red.svg'
import yellowteam from '../../../assets/blanta-team-yellow.svg'

import './Teams.css'

function Teams() {
  return (
    <section className="row mt-4 mb-5">
      <div className="row mb-5">
        <h1 className="text-center">Les Équipes</h1>
      </div>
      <div className="row mb-5">
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team red d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={redteam} width="80" height="80" alt="Logo 'Les Tridacnes'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">Les Tridacnes</span>
            </div>
          </div>
        </article>
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team pink d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={pinkteam} width="80" height="80" alt="Logo 'Les Pétoncles d'Aurore'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">Les Pétoncles d'Aurore</span>
            </div>
          </div>
        </article>
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team yellow d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={yellowteam} width="80" height="80" alt="Logo 'Les Nautiles Dorés'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">Les Nautiles Dorés</span>
            </div>
          </div>
        </article>
      </div>
      <div className="row">
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team green d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={greenteam} width="80" height="80" alt="Logo 'Les Conques d'Émeraude'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">Les Conques d'Émeraude</span>
            </div>
          </div>
        </article>
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team purple d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={purpleteam} width="80" height="80" alt="Logo 'L'Ordre de Spirales'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">L'Ordre de Spirales</span>
            </div>
          </div>
        </article>
        <article className="col-4 d-flex align-items-center justify-content-center">
          <div className="blanta-team blue d-flex flex-column p-3">
            <div className="blanta-team-logo-container">
              <div className="blanta-team-logo">
                <img src={blueteam} width="80" height="80" alt="Logo 'Les Marées Profondes'" />
              </div>
            </div>
            <div className="blanta-team-name-container">
              <span className="blanta-team-name">Les Marées Profondes</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Teams