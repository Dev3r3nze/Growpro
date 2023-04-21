import React, { Component } from "react";

class Dividier extends Component {
  render() {
    return (
      <div className="dividerText" id="lastCTA">
        <div id="titleYMás" className="textGrande textFino">
          {this.props.title}
        </div>
        <div className="textPequeño textFino">
          {this.props.text}
        </div>
        <button className="btnPrincipal">QUIERO MÁS INFO</button>
      </div>
    );
  }
}

export default Dividier;
