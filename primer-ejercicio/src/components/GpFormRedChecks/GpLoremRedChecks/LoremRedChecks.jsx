import React, { Component } from "react";
import "./LoremRedCheks.css";

class LoremRedChecks extends Component {
  render() {
    return (
      <div>
        {/* Título */}
        <h1 className="textGrande textFino">
          Lorem Ipsum es simplemente el texto de relleno de{" "}
          <strong>las imprentas</strong>
        </h1>
        <div className="checksForm">
          {/* Check 1 */}
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Sorteo de unas Súper Becas para todos nuestros destinos</p>
          </div>
          {/* Check 2 */}
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
          {/* Check 3 */}
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
          {/* Check 4 */}
          <div className="textPequeño textFino">
            <img src="Recursos\icons-check.png" alt="" />
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas.</p>
          </div>
        </div>
        {/* Botón */}
        <button className="btnPrincipal" id="btnChecks">
          QUIERO MÁS INFO
        </button>
      </div>
    );
  }
}

export default LoremRedChecks;
