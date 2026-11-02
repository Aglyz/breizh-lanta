import { useEffect } from 'react'
import { animate } from 'animejs'
import { MountainsIcon } from "@phosphor-icons/react";
import './App.css'

function App() {
  useEffect(() => {
    const animation = animate('.bl-animation', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      ease: 'outExpo'
    })

    return () => animation.pause()
  }, [])

  return (
    <main className="container py-5">
      <div className="bl-animation">
        <h1 className="text-success">
          <MountainsIcon size={32} className="me-2"/>
          Breizh-Lanta
        </h1>

        <p className="lead">
          Bienvenue dans l'aventure !
        </p>

        <button className="btn btn-success">
          Commencer
        </button>

      </div>
    </main>
  )
}

export default App