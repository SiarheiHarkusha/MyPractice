import React from 'react';
import Style from './Host.module.css'; 
import Map from '../Image/Map.jpg'

const Host = () => {
    return (
     
        <img className= {Style.photo} src={Map} alt='Map'/>
    )
}
export default Host;
