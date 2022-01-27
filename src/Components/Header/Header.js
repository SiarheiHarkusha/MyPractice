import React from 'react';
import Style from './Header.module.css'; 
import Map from '../Image/Map.jpg'

const Header = () => {
    return (
     
        <img className= {Style.photo} src={Map} alt='Map'/>
    )
}
export default Header;
