import React from 'react';
import Header from './Components/Header/Header'
import Style from './App.module.css';
import Navbar from './Components/Navbar/Navbar'

class App extends React.Component{
    state ={

    }

    render(){
        return(
            <div className={Style.main_background}>
                <Navbar/>
                <Header/>
                
            </div>
        )
    }
}

export default App