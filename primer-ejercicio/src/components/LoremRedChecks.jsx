import React, { Component } from "react";

class LoremRedChecks extends Component {
  render() {
    return (
      <div>
        <h1 className="textGrande textFino">
          Lorem Ipsum es simplemente el texto de relleno de{" "}
          <strong>las imprentas</strong>
        </h1>
        <div className="checksForm">
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Sorteo de unas Súper Becas para todos nuestros destinos</p>
          </div>
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
        </div>
        <button className="btnPrincipal" id="btnChecks">
          QUIERO MÁS INFO
        </button>
      </div>
    );
  }
}

export default LoremRedChecks;
