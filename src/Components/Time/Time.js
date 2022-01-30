import React from "react";
import Style from './Time.module.css'

const Time = () => {
    let time = new Date().toLocaleDateString();
    return(
        
        <div className={Style.date_and_time}>{time}</div>
        
    )
}

export default Time;