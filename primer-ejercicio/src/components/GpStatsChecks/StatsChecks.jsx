import React, { Component } from 'react';
import LoremRedChecks from '../GpFormRedChecks/GpLoremRedChecks/LoremRedChecks';
import ImageStats from './ImageStats/ImageStats';
import './StatsChecks.css';

class StatsChecks extends Component {
    render() {

        const texts=[
            "Sorteo de unas Súper Becas para todos nuestros destinos", 
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas.", 
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas.", 
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas."]

        return (
            <div className='section row statsChecks'>
                <div className='col-lg-6 col-12'>
                    <ImageStats image="../../../Recursos/image.png"/>
                </div>
                <div className='col' id='redCheks'>
                    <LoremRedChecks texts={texts}/>
                </div>
            </div>
        );
    }
}

export default StatsChecks;
