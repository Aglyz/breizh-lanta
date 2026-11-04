import './Footer.css'

import logo from '../assets/logo-breizh-lanta.svg'

function Footer() {
  return (
    <footer className="d-flex flex-column w-100 mt-auto">
        <div className="footdelimiter-container">
            <div className="footdelimiter-item red"></div>
            <div className="footdelimiter-item pink"></div>
            <div className="footdelimiter-item yellow"></div>
            <div className="footdelimiter-item green"></div>
            <div className="footdelimiter-item purple"></div>
            <div className="footdelimiter-item blue"></div>
        </div>
        <div className="container my-2">
            <img src={logo} width="96" height="96" alt="logo"/>
        </div>
    </footer>
  )
}

export default Footer