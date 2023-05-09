import React, { Component } from "react";
import "./ExperienciaCards.css";
import tarjetas from "./BbddTarjetas.json";
class ExperienciaCards extends Component {
  render() {
    // Tarjetas

    // Función para mostrar más texto
    function MostrarMas(num) {
      var text = document.getElementsByClassName("textVer")[num];
      if (text.style.display == "flex") {
        text.style.display = "none";
        document.getElementsByClassName("verMasIcon")[num].style.transform =
          "rotate(0deg)";
      } else {
        text.style.display = "flex";
        document.getElementsByClassName("verMasIcon")[num].style.transform =
          "rotate(180deg)";
      }
    }

    return (
      <div>
        <div className="section">
          {/* Título */}
          <p className="textGrande textFino ancho" id="sectionExp">
            ¿Qué tipo de <strong>experiencia quieres vivir?</strong>
          </p>
          <p className="textFino textPequeño text-start container-fluid">
            Selecciona el tipo de curso que te gustaría hacer, rellena el
            formulario y nuestro equipo especialista se pondrá en contacto
            contigo tan pronto como sea posible.
          </p>
          {/* Fila de tarjetas */}
          <div
            className="row g-lg-1 g-5 justify-content-center"
            id="rowExperiencias"
          >
            {/* Tarjetas */}
            {tarjetas.tarjetas.map((tarjeta, index) => {
              return (
                // Columna
                <div className="col-lg-4 p-0 p-lg-3" key={index}>
                  {/* Tarjeta */}
                  <div className="card">
                    {/* TopVentas */}
                    {tarjeta.topVentas && (
                      <div className="topVentas ancho">
                        <p className="textTiny">
                          Top ventas de GrowPro Experience
                        </p>
                      </div>
                    )}
                    {/* Imagen */}
                    <img src={tarjeta.image} alt="" className="card-img-top" />
                    {/* Oferta */}
                    {tarjeta.enOferta && (
                      <p className="cardOff textTiny">
                        🔥{tarjeta.oferta}% off
                      </p>
                    )}
                    {/* Fondo y body */}
                    <div className="cardFondo ancho">
                      <div className="cardBody"
                      >
                        <h5 className="cardTitle">{tarjeta.title}</h5>
                        <p className="precioCard textMedio">
                          <del>8800 AUD</del> | <strong>2640 AUD</strong>
                        </p>
                        <button className="btnCard textMedio">
                          <p className="textTiny">SELECCIONAR</p>
                        </button>
                        {/* Ver más */}
                        <div className="verMasDiv">
                          <div
                            className="verMasController"
                            onClick={() => MostrarMas(index)}
                          >
                            <p className="verMasCard textTiny">VER MÁS</p>
                            <img
                              src="Recursos/verMásIcon.png"
                              alt=""
                              className="verMasIcon"
                            />
                          </div>
                          {/* Texto de ver más*/}
                          <div className="textVer">
                            <p className="text-start textPequeño">
                              {tarjeta.verMasTexto}
                            </p>
                          </div>
                        </div>
                        <div className="divider"></div>
                        <div className="validezDiv">
                          <img
                            src="Recursos/validezicon.png"
                            alt=""
                            className="validezIcon"
                          />
                          <p className="validezText">Válido hasta 25/02/2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienciaCards;
