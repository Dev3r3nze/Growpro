import React, { Component, useEffect } from 'react';
import Stats from './Stats/Stats';
import { useGetData } from '../../../services/google.jsx';

const ImageStats = (props) =>  {
        
        const { data, getData } = useGetData();

        useEffect(() => {
            getData();
        }, []);

        return (
            <div className='row justify-content-center'>
                <img src={props.image} alt="" className='imgStat'/>
                {data && <Stats opiniones={data.social.gp_socials[0].n_reviews} puntos={data.social.gp_socials[0].gp_stars} estudiantes={`+${data.global.gp_social_variable[0].gp_number}`}/>}
            </div>
        );
}

export default ImageStats;
