import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="row text-center " id="footer">
        {/* Columna copy */}
        <div className="footerText col-md-6 col-12 order-2 order-md-1">
          <p>©2021 GrowPro • Todos los derechos reservados</p>
        </div>
        {/* Columna links */}
        <div className="footerText col order-1 order-md-2">
          <p>
            <a href="" className="textMuyPeque textFino">
              Aviso legal
            </a>{" "}
            |{" "}
            <a href="" className="textMuyPeque textFino">
              Política de cookies
            </a>{" "}
            |{" "}
            <a href="" className="textMuyPeque textFino">
              Política de privacidad
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
