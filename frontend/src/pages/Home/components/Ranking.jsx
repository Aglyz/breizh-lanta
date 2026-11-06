import blueteam from '../../../assets/blanta-team-blue.svg'
import greenteam from '../../../assets/blanta-team-green.svg'
import pinkteam from '../../../assets/blanta-team-pink.svg'
import purpleteam from '../../../assets/blanta-team-purple.svg'
import redteam from '../../../assets/blanta-team-red.svg'
import yellowteam from '../../../assets/blanta-team-yellow.svg'

import Triskele from "../../../assets/triskele-symbol.svg?react";
import Hermine from "../../../assets/hermine-symbol.svg?react";

import './Ranking.css'

function Ranking() {
  return (
    <section id="blanta-ranking" className="row position-relative mt-4">
      <div className="row mb-3">
        <h1 className="text-center">Classement</h1>
      </div>
      <div className="row mb-5 px-5">
        <div className="ranking-show-container">
          <div className="podium second">
            <div className="podium-team mb-4">
              <div className="blanta-team-logo mt-auto">
                <img src={purpleteam} width="80" height="80" alt="Logo 'L'Ordre de Spirales'" />
              </div>
            </div>
            <div className="podium-pillar purple">
              <span className="podium-name">L'Ordre des Spirales</span>
              <span className="podium-rank mt-auto">2</span>
            </div>
          </div>
          <div className="podium first">
            <div className="podium-team mb-4">
              <div className="blanta-team-logo mt-auto">
                <img src={pinkteam} width="80" height="80" alt="Logo 'Les Pétoncles d'Aurore'" />
              </div>
            </div>
            <div className="podium-pillar pink">
              <span className="podium-name">Les Pétoncles d'Aurore</span>
              <span className="podium-rank mt-auto">1</span>
            </div>
          </div>
          <div className="podium third">
            <div className="podium-team mb-4">
              <div className="blanta-team-logo mt-auto">
                <img src={blueteam} width="80" height="80" alt="Logo 'Les Marées Profondes'" />
              </div>
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
            <div className="blanta-team-logo mt-auto me-3">
              <img src={greenteam} width="80" height="80" alt="Logo 'Les Conques d'Émeraude'" />
            </div>
            <span className="podium-name">Les Conques d'Émeraude</span>
            <span className="podium-rank ms-auto">4</span>
            <div className="podium-bg"></div>
          </div>
          <div className="podium-line red mb-3">
            <div className="blanta-team-logo mt-auto me-3">
              <img src={redteam} width="80" height="80" alt="Logo 'Les Tridacnes'" />
            </div>
            <span className="podium-name">Les Tridacnes</span>
            <span className="podium-rank ms-auto">5</span>
            <div className="podium-bg"></div>
          </div>
          <div className="podium-line yellow mb-3">
            <div className="blanta-team-logo mt-auto me-3">
              <img src={yellowteam} width="80" height="80" alt="Logo 'Les Nautiles Dorés'" />
            </div>
            <span className="podium-name">Les Nautiles Dorées</span>
            <span className="podium-rank ms-auto">6</span>
            <div className="podium-bg"></div>
          </div>
        </div>
      </div>
      <Triskele className="triskele" />
      <Hermine className="hermine" />
    </section>
  )
}

export default Ranking