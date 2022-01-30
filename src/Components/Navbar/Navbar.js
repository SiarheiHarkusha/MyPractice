import React from "react";
import Style from './Navbar.module.css';
import Time from '../Time/Time';
import Home from './Home';
import History from './History'
import About from './About'

class Navbar extends React.Component{
    constructor(){
        super()
    }
   
    
    
    render(){
        return (
            <div className={Style.main_block_navbar}>
                <Time/>
                <Home/>
                <History/>
                <About/>
            </div>
            
        )
    }

}




export default Navbar;
