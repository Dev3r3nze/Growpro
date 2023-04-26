import React, { Component, useEffect } from 'react';
import Stats from './Stats/Stats';
import { fetchData } from '../../../services/google.jsx';

const ImageStats = (props) =>  {
        
        // const { data, getData } = useGetData();
        const [data, setData] = React.useState(null);

        const GetData = () => {
            fetchData().then((data) => {
                setData(data);
            });
          };
        
        useEffect(() => {
            GetData();
        }, []);
        
        // useEffect(() => {
        //     getData();
        // }, []);

        return (
            <div className='row justify-content-center'>
                <img src={props.image} alt="" className='imgStat'/>
                {data ? 
                <Stats opiniones={data.social.gp_socials[0].n_reviews} 
                puntos={data.social.gp_socials[0].gp_stars} 
                estudiantes={`+${data.global.gp_social_variable[0].gp_number}`}/>
                : 
                <div><p>Loading...</p></div>
            }
            
            </div>
        );
}

export default ImageStats;
