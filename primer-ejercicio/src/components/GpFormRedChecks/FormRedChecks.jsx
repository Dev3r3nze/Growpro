import React, { Component } from "react";
import Formulario from "./GpFormulario/FormularioComponent";
import LoremRedChecks from "./GpLoremRedChecks/LoremRedChecks";
import "./FormRedChecks.css";

class FormRedChecks extends Component {
  render() {

    const texts=[
    "Sorteo de unas Súper Becas para todos nuestros destinos", 
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas.", 
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas.", 
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas."]

    return (
      <div className="row g-4 w-100" id="formSectionRow">
        {/* Columna formulario */}
        <div className="col-lg-6 order-lg-1 order-2 " id="form">
          <Formulario />
        </div>
        {/* Columna textos */}
        <div className="col-lg-6 order-lg-2 order-1" id="redChecks">
          <LoremRedChecks texts={texts}/>
        </div>
      </div>
    );
  }
}

export default FormRedChecks;

