import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
                <form action="" className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-xl-6 ">
                  <label htmlFor="">Nombre</label>
                  <input type="text" required />
                </div>
                <div className="col-sm-12 col-xl-6  mt-4 mt-lg-0 ">
                  <label htmlFor="">Apellidos</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="row  mt-4">
                <div className="col">
                  <label htmlFor="">Correo</label>
                  <input type="email" className="ancho" required />
                </div>
              </div>
              <div className="row mt-4">
                <label htmlFor="">Número de teléfono</label>
              </div>
              <div className="row ">
                <div className="col-5 col-lg-6">
                  <select className="textTiny">
                    <option value="Spn">Spain</option>
                    <option value="Mex">México</option>
                    <option value="Arg">Argentina</option>
                  </select>
                </div>
                <div className="col-7 col-lg-6">
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    pattern="^\+34\d{9}$"
                    required
                  />
                </div>
              </div>

              <div className="row  mt-4">
                <div className="col-sm-12 col-xl-6 ">
                  <label htmlFor="">Nacionalidad</label>
                  <select className="textTiny">
                    <option value="Spn">España</option>
                    <option value="Mex">México</option>
                    <option value="Arg">Argentina</option>
                  </select>
                </div>
                <div className="col-sm-12 col-xl-6  mt-4 mt-lg-0 ">
                  <label htmlFor="">¿Qué quieres estudiar?</label>
                  <select className="textTiny">
                    <option value="S">Seleccione</option>
                    <option value="Mex">Inglés</option>
                    <option value="Arg">Marketing</option>
                  </select>
                </div>
              </div>
              <div className="row  mt-4">
                <div className="col-2" id="colTerms">
                  <input type="checkbox" id="checkTerms" required />
                </div>
                <div className="col">
                  <p id="termsText">
                    He leído y acepto el <a href="">aviso legal</a> y la{" "}
                    <a href="">política de privacidad.</a>
                  </p>
                </div>
              </div>
              <div className="row ancho" id="rowSend">
                <input
                  type="submit"
                  id="btnForm"
                  className="btnPrincipal"
                  value="ENVIAR"
                />
              </div>
            </form>
        );
    }
}

export default Formulario;
