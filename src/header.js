import './App.css';
import React from 'react';
import Image from 'react-bootstrap/Image';



const header = () => {
    return (
        <div>
          <h1 className = 'App-header'>欢迎你，超级管理员 
          <Image src="何炙霖一寸.png" width="40" height="40" roundedCircle />
          </h1> 
        </div>
     
        
    )
}


export default header;

