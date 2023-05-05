import React, { Component } from "react";
import Anuncio from "../GpAd/Anuncio";

import "./Header.css";

class Header extends Component {
  render() {
    const anucio = false;

    // Ocultar o mostrar header al hacer scroll
    addEventListener(
      "load",
      () => {
        var header = document.getElementById("headerLogo");
        var lastScrollPosition = 0;
        var btnHeader = document.getElementById("btnHeaderMobile");
        btnHeader.classList.add("headerLogoHidden");
        window.addEventListener("scroll", function () {
          var currentScrollPosition = window.scrollY;

          if (
            currentScrollPosition > lastScrollPosition &&
            window.innerWidth > 768
          ) {
            // Scrolling hacia abajo (ocultar)
            header.classList.add("headerLogoHidden");
            btnHeader.classList.add("headerLogoHidden");
          } else {
            // Scrolling hacia arriba (mostrar)
            header.classList.remove("headerLogoHidden");
            btnHeader.classList.remove("headerLogoHidden");
          }

          // Si el scroll es menor a 500px, ocultar el botón en el header
          if (currentScrollPosition < 500) {
            btnHeader.classList.add("headerLogoHidden");
          }

          lastScrollPosition = currentScrollPosition;
        });
        if (anucio)
          document.getElementById("headerLogo").style.height = "130px";
      },
      false
    );

    return (
      <header className="App-header">
        {/* Barra + logo */}
        <div className="w-100 headerLogo" id="headerLogo">
          {/* Anuncio */}
          {anucio && <Anuncio />}
          <div className="headerCosas">
            <img
              src="Recursos/LOGO 1.png"
              alt="logo grow pro"
              id="logoImg"
            ></img>
            <button id="btnHeaderMobile" className="btnHeaderStyle">
              <p className="textMedio">QUIERO MÁS INFO</p>
            </button>
          </div>
        </div>
        {/* Header+CTA */}
        <div className="container-fluid" id="headerText">
          <h1 id="headerTitle">
            Las mejores experiencias para estudiar y trabajar en{" "}
            <span id="titleSpecial">Australia</span>
          </h1>
          <button id="btnHeader" className="btnHeaderStyle">
            <p className="textMedio">QUIERO MÁS INFO</p>
          </button>
        </div>
        {/* Efecto curva de la imagen con SVG*/}
        <svg width="0" height="0">
          <defs>
            <clipPath
              id="gp-header-default-mask"
              clipPathUnits="objectBoundingBox"
            >
              <path d="M0,0 V0.82 S0.214,0.999,0.391,1 C0.516,1,0.582,0.935,0.656,0.904 C0.746,0.867,0.767,0.867,0.809,0.862 C0.905,0.852,1,0.915,1,0.915 V0" />
            </clipPath>
          </defs>
        </svg>
        {/* Imagen de línea roja discontinua */}
        <div id="line" />
      </header>
    );
  }
}

export default Header;
