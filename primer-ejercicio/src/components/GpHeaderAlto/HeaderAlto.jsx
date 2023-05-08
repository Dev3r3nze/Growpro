import React from "react";
import "./HeaderAlto.css";

const HeaderAlto = (props) => {
  return (
    <header className="headerAlto">
      <div className="logoDiv header py-1 py-xl-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="268.19"
                height="39.94"
                viewBox="0 0 268.19 39.94"
                className="logoImg"
              >
                <path
                  d="M19.58,39.29A19.58,19.58,0,1,1,34.84,7.46a2.86,2.86,0,0,1-.46,4,2.85,2.85,0,0,1-4-.39A13.88,13.88,0,1,0,19.58,33.58,12.74,12.74,0,0,0,32.15,23.51H20.42a2.85,2.85,0,0,1-2.86-2.85,2.87,2.87,0,0,1,2.86-2.86H35.63a2.93,2.93,0,0,1,2,.95,2.86,2.86,0,0,1,.72,2.06c-.6,10.7-8.48,18.48-18.73,18.48Zm28.13-17.9H59.66c1.21-.48,5.18-2.39,5.18-7.14,0-7.45-5-8.45-5.87-8.56H47.71ZM59.48,0H42V36.67a2.85,2.85,0,1,0,5.7,0V27.09H58.54l6.71,11.06a2.86,2.86,0,0,0,2.44,1.38,2.86,2.86,0,0,0,2.76-2.17,2.92,2.92,0,0,0-.34-2.16l-5.89-9.76a13.16,13.16,0,0,0,6.33-11.19C70.55,1.8,60.62.15,59.48,0Zm34.9,5.76a14,14,0,1,0,9.9,4.1,14,14,0,0,0-9.9-4.1Zm0,33.7a19.73,19.73,0,1,1,13.93-5.78,19.74,19.74,0,0,1-13.93,5.78ZM248.49,5.77a14,14,0,1,0,9.89,4.1,14,14,0,0,0-9.89-4.1Zm0,33.7a19.73,19.73,0,1,1,13.92-5.78,19.75,19.75,0,0,1-13.92,5.78ZM202.63,21.79h11.94c1.21-.47,5.18-2.38,5.18-7.13,0-7.45-5-8.45-5.87-8.56H202.63Zm20,18.14a2.86,2.86,0,0,1-2.44-1.38l-6.72-11H202.63v9.58a2.87,2.87,0,0,1-.22,1.09,2.76,2.76,0,0,1-.62.93,3,3,0,0,1-.93.62,2.86,2.86,0,0,1-1.09.21,2.93,2.93,0,0,1-1.09-.21,3.09,3.09,0,0,1-.93-.62,2.89,2.89,0,0,1-.61-.93,2.69,2.69,0,0,1-.22-1.09V.39h17.37c.11,0,11.16,1.12,11.16,14.26a13.18,13.18,0,0,1-6.32,11.19L225,35.59a2.8,2.8,0,0,1,.42,1.43,2.88,2.88,0,0,1-.36,1.46,2.91,2.91,0,0,1-1,1.07A2.83,2.83,0,0,1,222.6,39.93Zm-94.52-.85H128a2.93,2.93,0,0,1-1.63-.6,2.83,2.83,0,0,1-1-1.44L115.55,4a2.83,2.83,0,0,1-.13-1.12,3,3,0,0,1,.32-1.09A2.85,2.85,0,0,1,118.58.3a3,3,0,0,1,1.08.34,3,3,0,0,1,.86.74,2.9,2.9,0,0,1,.5,1l7.37,24.84,6.79-18.11a2.87,2.87,0,0,1,2.65-1.86,2.86,2.86,0,0,1,1.63.48,2.83,2.83,0,0,1,1,1.34l7.16,18.33,7.42-25A2.9,2.9,0,0,1,156.47.69a2.82,2.82,0,0,1,2.17-.22h0A2.85,2.85,0,0,1,160.56,4l-9.78,33a2.83,2.83,0,0,1-1,1.44,2.79,2.79,0,0,1-1.64.6H148a2.9,2.9,0,0,1-1.61-.49,2.87,2.87,0,0,1-1-1.32l-7.48-19.15-7.17,19.12a2.84,2.84,0,0,1-1,1.33,2.94,2.94,0,0,1-1.62.52Zm42.61-17h10.85c1.12-.14,5.87-1.14,5.87-7.74s-5.09-8.28-6.4-8.56H170.69v16.3Zm-2.85,17.67a2.93,2.93,0,0,1-2-.84,2.89,2.89,0,0,1-.84-2V.1l16.76,0c3.93.63,11.39,4.41,11.39,14.24S185.82,27.48,182,27.83H170.72v9.1a2.83,2.83,0,0,1-2.85,2.85Zm82.24-18.19-5.23,1.86,1.8-5.29,5.52-2.05-2.1,5.48Zm3.86-8.86L245.19,16a1.38,1.38,0,0,0-.47.31,1.22,1.22,0,0,0-.3.48l-2.85,8.38a1.22,1.22,0,0,0,.17,1.15,1.24,1.24,0,0,0,.45.4,1.3,1.3,0,0,0,.58.14,1.21,1.21,0,0,0,.43-.07l8.28-2.95a1.31,1.31,0,0,0,.47-.28,1.41,1.41,0,0,0,.3-.46l3.33-8.66a1.26,1.26,0,0,0-.29-1.36,1.27,1.27,0,0,0-1.35-.3Z"
                  style={{ fillRule: "evenodd" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row p-0 m-0">
          <div className="col-lg-6 col-12">
            <div class="containerHeader">
              <div class="row rowGrande">
                <div class="col-12 text-center text-lg-start p-0 m-0">
                  <div class="col-12">
                    <h2 class="fw-bold"></h2>
                    <h1>
                      GrowPro Meeting <strong>Barcelona (Resgistros cerrados)</strong>
                    </h1>

                    <div class="subtitle mt-3">
                      <p>
                        El evento presencial definitivo para demostrarte que
                        irte a vivir a Australia es más sencillo que recibir una
                        respuesta de tu <i>crush</i>{" "}
                      </p>
                      <b> Dónde: WeWork Carrer de la Ciutat de Granada 121 </b>
                      <p></p>
                    </div>

                    <div class="row align-items-stretch">
                      <div class="col-12 col-md-6 col-lg-5 col-xl-5 mb-3">
                        <div class="card bg-white box-shadow-sm">
                          <div class="p-6 px-lg-1 py-lg-2 text-center fw-600">
                            <div class="card-icon">
                              <img
                                src="https://campaign.growproexperience.com/hubfs/raw_assets/public/gp-hubspot-theme/images/icons-v4/icon-cal-ok.svg"
                                alt=""
                              />
                            </div>
                            <div class="cardText">
                              <p>{props.fecha}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-5 col-xl-5 mb-3">
                        <div class="card bg-white box-shadow-sm">
                          <div class="p-6 px-lg-1 py-lg-2 text-center fw-600">
                            <div class="card-icon">
                              <img
                                src="https://campaign.growproexperience.com/hubfs/raw_assets/public/gp-hubspot-theme/images/icons-v4/clock-stroke-color.svg"
                                alt=""
                              />
                            </div>
                            <div class="cardText">
                              <select class="formSelect" aria-label="Horarios">
                                {/* <option selected=""> 18:00h</option> */}
                                {props.horas.map((hora) => (
                                  <option value={hora}>{hora}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="">
                      <a
                        href="#hs_cos_wrapper_widget_1664855981530_"
                        class="btnHeaderStyle text-uppercase"
                      >
                        ¡Apúntate!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-cover">
        <svg width="0" height="0">
          <defs>
            <clipPath id="mask-image-mobile" clipPathUnits="objectBoundingBox">
              <path d="M0.629,0 C-0.005,0,0,0.651,0,0.651 V1 H1 V0.069 S0.906,0,0.629,0"></path>
            </clipPath>
            <clipPath id="mask-image-desktop" clipPathUnits="objectBoundingBox">
              <path d="M0.629,0 C-0.005,0,0,0.651,0,0.651 V1 H1 V0"></path>
            </clipPath>
          </defs>
        </svg>
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
    </header>
  );
};

export default HeaderAlto;
