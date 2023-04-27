import React, { Component } from "react";
import "./Divider.css";

class Dividier extends Component {
  render() {
    return (
      <div className="dividerText">
        {this.props.imagen ? (
          <div className="row ctaImg">
          <div className="col-12 col-lg-6 text-start order-1 order-lg-1">
          <div id="titleYMás" className="textGrande textFino">
            {this.props.title}
          </div>
          <div className="textPequeño textFino">{this.props.text}</div>
          <button className="btnPrincipal mt-3">{this.props.textBtn}</button>
          </div>
          <div className="col-12 col-lg-6 text-start order-2 order-lg-1 mt-lg-0 mt-5">
            <img src={this.props.imagenSrc} alt="lastCTA" className="ancho" />
          </div>
        </div>
          
        ) : (
          <div className="cta">
            <div id="titleYMás" className="textGrande textFino">
              {this.props.title}
            </div>
            <div className="textPequeño textFino">{this.props.text}</div>
            <button className="btnPrincipal">{this.props.textBtn}</button>
          </div>
        )}
      </div>
    );
  }
}

export default Dividier;
