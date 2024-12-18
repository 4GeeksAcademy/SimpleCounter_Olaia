import React from 'react';
import ReactDOM from 'react-dom';
// Include bootstrap npm library into the bundle
import SimpleCounter from "./component/home"

// Include your index.scss file into the bundle
import '../styles/index.css';


let contador = 0;


setInterval(() => {
    const seis = Math.floor(contador / 100000);
    const cinco = Math.floor(contador/10000)
    const cuatro = Math.floor(contador / 1000);
    const tres = Math.floor(contador / 100);
    const dos = Math.floor(contador / 10);
    const uno = Math.floor(contador / 1);
    contador++;
    
       ReactDOM.render(
         <SimpleCounter digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />, document.getElementById('app')) 
  
}, 100000);