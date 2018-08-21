import React from 'react';
import LogImg from './logo.png'
import './logo.css'

class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={LogImg} alt=""/>
            </div>
        )
    }
}

export default Logo;