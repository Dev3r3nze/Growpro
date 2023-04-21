import React, { Component } from 'react';
import './Stats.css';

class Stats extends Component {
    render() {
        return (
            <div className='row fondo'>
                <div className='col-6'>
                    <p className='titleStat'>{this.props.puntos}</p>
                    <img src="../../../../Recursos/stars.png" alt="" className='stars' />
                    <p className='statDesc'>{this.props.opiniones} opiniones</p>
                    <img src="../../../../Recursos/logos_google.png" alt="" className='googleLogo'/>
                </div>
                <div className='col colEstudiantes'>
                    <p className='titleStat'>{this.props.estudiantes}</p>
                    <p className='statDesc'>Estudiantes ya han vivido  la experiencia con GrowPro</p>
                </div>
            </div>
        );
    }
}

export default Stats;
