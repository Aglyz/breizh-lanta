import About from './components/About.jsx'
import Teams from './components/Teams.jsx'
import Ranking from './components/Ranking.jsx'

import './Home.css'

function Home() {
  return (
    <main className="container d-flex flex-column my-5">
      <About />
      <Teams />
      <Ranking />
    </main>
  )
}

export default Home