import React, { Component } from "react";

class ExperienciaCards extends Component {
  render() {
    const tarjetas = [
      {
        title: "Estudia Medio Ambiente en Sidney",
        image: "../Recursos/card1.png",
        enlaceBtn: "https://www.google.com",
        verMasTexto: "Ver más texto",
        topVentas: true,
        enOferta: true,
        oferta: 70,
        precio: 8800,
        precioOferta: 2640,
        vlidezOferta: "Válido hasta el 25/02/2023",
      },
      {
        title: "Estudia Medio Ambiente en Sidney",
        image: "../Recursos/card2.png",
        enlaceBtn: "https://www.google.com",
        verMasTexto: "Ver más texto",
        topVentas: false,
        enOferta: false,
        oferta: 70,
        precio: 8800,
        precioOferta: 2640,
        vlidezOferta: "Válido hasta el 25/02/2023",
      },
      {
        title:
          "Estudia Inglés general mientras disfrutas de las playas de Australia",
        image: "../Recursos/card3.png",
        enlaceBtn: "https://www.google.com",
        verMasTexto: "Ver más texto",
        topVentas: false,
        enOferta: false,
        oferta: 70,
        precio: 8800,
        precioOferta: 2640,
        vlidezOferta: "Válido hasta el 25/02/2023",
      },
      {
        title: "Estudia Medio Ambiente en Sidney",
        image: "../Recursos/card1.png",
        enlaceBtn: "https://www.google.com",
        verMasTexto: "Ver más texto",
        topVentas: true,
        enOferta: true,
        oferta: 70,
        precio: 8800,
        precioOferta: 2640,
        vlidezOferta: "Válido hasta el 25/02/2023",
      },
      {
        title:
          "Estudia Inglés general mientras disfrutas de las playas de Australia",
        image: "../Recursos/card3.png",
        enlaceBtn: "https://www.google.com",
        verMasTexto: "Ver más texto",
        topVentas: false,
        enOferta: false,
        oferta: 70,
        precio: 8800,
        precioOferta: 2640,
        vlidezOferta: "Válido hasta el 25/02/2023",
      },
    ];

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
      <div className="row g-lg-1 g-5 justify-content-center" id="rowExperiencias">
        {/* Primera tarjeta */}
        {tarjetas.map((tarjeta, index) => {
          return (
            <div className="col-lg-4 p-0 p-lg-3" key={index}>
              <div className="card">
                {tarjeta.topVentas && (
                  <div className="topVentas ancho">
                    <p className="textTiny">Top ventas de GrowPro Experience</p>
                  </div>
                )}
                <img src={tarjeta.image} alt="" className="card-img-top" />
                {tarjeta.enOferta && (
                  <p className="cardOff textTiny">🔥{tarjeta.oferta}% off</p>
                )}
                <div className="cardFondo ancho">
                  <div className="cardBody">
                    <h5 className="cardTitle">{tarjeta.title}</h5>
                    <p className="precioCard textMedio">
                      <del>8800 AUD</del> | <strong>2640 AUD</strong>
                    </p>
                    <button className="btnCard textMedio">
                      <p className="textTiny">SELECCIONAR</p>
                    </button>
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
                      <div className="textVer">
                        <p className="text-start textPequeño">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quia dignissimos, vel temporibus nihil est dicta
                          culpa
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
    );
  }
}

export default ExperienciaCards;
