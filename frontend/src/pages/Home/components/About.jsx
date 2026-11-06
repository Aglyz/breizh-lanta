import logo from '../../../assets/logo-breizh-lanta.svg'
import Triskele from "../../../assets/triskele-symbol.svg?react";
import Hermine from "../../../assets/hermine-symbol.svg?react";

import './About.css'

function About() {
  return (
    <section id="blanta-about" className="row position-relative">
      <div className="col-4 d-flex align-items-center justify-content-center">
        <img src={logo} width="192" height="192" alt="logo" />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <h1 className="mb-3">C'est quoi BREIZH LANTA ?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,</p>
        <p>the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades,</p>
        <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
      </div>
      <Triskele className="triskele" />
      <Hermine className="hermine" />
    </section>
  )
}

export default About