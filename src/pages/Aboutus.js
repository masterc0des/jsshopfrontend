import React from 'react';
import './pages.css';


function Aboutus() {
    return (
      <div className='div-aboutus'>
          <h1 id="h1-aboutus">Über uns</h1>
          <div className="div-aboutus-content">
          <p className="paragraph">Entwickler: infinitecodes</p>
          <a id="a-email" href="mailto:evgagtx1060sc@gmail.com">evgagtx1060sc@gmail.com</a>
          <br></br>
          <p id="p-separator"></p>
          <a id="a-github" href="https://github.com/infinitec0des/">GitHub</a>
          <p id="p-separator"></p>
          <ul>Genutzte Technogien:
              <li>Java Spring Boot</li>
              <li>ReactJS</li>
          </ul>
          </div>
      </div>
    )
}

export default Aboutus;