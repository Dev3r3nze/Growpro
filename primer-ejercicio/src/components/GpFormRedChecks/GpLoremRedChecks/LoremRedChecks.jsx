import React, { Component } from "react";
import "./LoremRedCheks.css";

function LoremRedChecks (props) {

    return (
      <div>
        {/* Título */}
        <h1 className="textGrande textFino">
          Lorem Ipsum es simplemente el texto de relleno de{" "}
          <strong>las imprentas</strong>
        </h1>
        <div className="checksForm">

          {/* Checks */}
          {props.texts.map((text, index) => {
            return (
              <div className="textPequeño textFino" key={index}>
                <img src="Recursos\icons-check.png" alt="" />
                <p>{text}</p>
              </div>
            )
          })}
        </div>
        {/* Botón */}
        <button className="btnPrincipal" id="btnChecks">
          QUIERO MÁS INFO
        </button>
      </div>
    );
  }

export default LoremRedChecks;
