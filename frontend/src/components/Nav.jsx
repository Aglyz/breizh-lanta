import { UserIcon } from "@phosphor-icons/react";
import './Nav.css'

import logo from '../assets/logo-breizh-lanta.svg'

function Nav() {
  return (
    <nav id="nav-lanta" className="navbar sticky-top">
      <div className="container">
        <img src={logo} width="96" height="96" alt="logo"/>
        <section className="parallelogram-container ms-auto me-4">
          <div className="parallelogram red"></div>
          <div className="parallelogram pink"></div>
          <div className="parallelogram yellow"></div>
          <div className="parallelogram green"></div>
          <div className="parallelogram purple"></div>
          <div className="parallelogram blue"></div>
        </section>
        <UserIcon id="user-icon" size={44} weight="fill" />
      </div>
    </nav>
  )
}

export default Nav