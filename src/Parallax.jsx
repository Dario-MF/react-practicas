import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from 'react';

const Parallax = () => (
    <div className="App">
        <div className="parallax-container">
          <div className="parallax"><img src="https://materializecss.com/images/parallax1.jpg" /></div>
        </div>
        <div className="section white">
          <h1>Efecto parallax</h1>
        </div>
    </div>
);

export default Parallax