import React, { Component } from "react";
import "./AboutUs.css";
import Dividier from "../GpDivider/Dividier";

class AboutUs extends Component {
  render() {
    const tarjetas = [
      {
        icon: "Recursos/iconInfo1.png",
        title: "KICK-OFF MEETING",
        text: "Es una sesión online que se realiza antes de tu viaje, en la que conocerás a tu equipo en destino y a otros estudiantes. ¡Aterrizarás con la seguridad de conocer a quién te espera en destino.",
      },
      {
        icon: "Recursos/iconInfo3.png",
        title: "WELCOME SESSION Y WELCOME NIGHT",
        text: "Nada más llegar, te recibimos en nuestras oficinas, junto a otros estudiantes, para contarte todo sobre tu nueva ciudad. Después, te invitaremos a un ¡buen evento!",
      },
      {
        icon: "Recursos/iconInfo2.png",
        title: "WORKSHOP",
        text: "Tenemos las claves para que encuentres trabajo y las compartimos en diferentes workshops. ¡Te lo ponemos más fácil!",
      },
      {
        icon: "Recursos/iconInfo4.png",
        title: "EVENTAZOS",
        text: "Eventos todas las semanas. Cada uno es una excusa para juntar a la comunidad grower y pasar un buen rato juntos. ¡Las buenas vibes que no falten!",
      },
    ];

    return (
      <div className="section" id="sectionDiff">
        <p className="textGrande textFino text-center">
          ¿Qué hace diferente GrowPro?
        </p>
        <strong className="textGrande text-center">
          Te acompaña en destino, pero de verdad
        </strong>
        {/* Tarjetas */}
        <div className="row mt-lg-4 mt-0 g-5 cardRow ancho justify-content-between">
          {tarjetas.map((tarjeta, index) => {
            return (
              <div className="col-lg-6 col-12" key={index}>
                <div className="infoCard mx-2">
                  <img src={tarjeta.icon} alt="" className="iconInfo" />
                  <p className="titleInfo">{tarjeta.title}</p>
                  <p className="textInfo">{tarjeta.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AboutUs;

