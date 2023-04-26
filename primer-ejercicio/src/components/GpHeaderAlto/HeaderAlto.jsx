import React from "react";
import "./HeaderAlto.css";

const HeaderAlto = () => {
  return (
    <div className="headerAlto row">
        <div className="col-6 order-2 img-cover">

        </div>
      <div className="col-6">
        <div class="container position-relative">
          <div class="component-inner pt-9 pt-md-10 pt-lg-12 pb-lg-15">
            <div class="row">
              <div class="col-12 col-lg-6 col-text text-center text-lg-start mb-10 mb-lg-0">
                <div>
                  <div class="col-12 col-xl-10">
                    <h2 class="fw-bold"></h2>
                    <h1>
                      GrowPro Meeting <strong>Barcelona</strong>
                    </h1>

                    <div class="subtitle mt-5">
                      <p>
                        El evento presencial definitivo para demostrarte que
                        irte a vivir a Australia es más sencillo que recibir una
                        respuesta de tu <i>crush</i>{" "}
                      </p>
                      <p></p>{" "}
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
                            <div class="card-text mt-5 ">
                              <p>04 de mayo</p>
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
                            <div class="card-text mt-5 ">
                              <select class="form-select" aria-label="Horarios">
                                <option selected=""> 18:00h</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-8">
                      <a
                        href="#hs_cos_wrapper_widget_1664855981530_"
                        class="btn btn-light text-uppercase"
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
    </div>
  );
};

export default HeaderAlto;
