import React from 'react';

function SimpleCounter({ digitoCuatro, digitoTres, digitoDos, digitoUno }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuatro">{digitoCuatro % 10}</div>
            <div className="tres">{digitoTres % 10}</div>
            <div className="dos">{digitoDos % 10}</div>
            <div className="uno">{digitoUno % 10}</div>
        </div>
    );
}

export default SimpleCounter




