import React from 'react';
import Host from './Components/Host/Host'
import Style from './App.module.css';
import Navbar from './Components/Navbar/Navbar'

class App extends React.Component{
    render(){
        return(
            <div className={Style.main_background}>
                <Navbar/>
                <Host/>
                
            </div>
        )
    }
}

export default App