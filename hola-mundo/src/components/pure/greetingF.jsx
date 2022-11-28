import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // useState hook en un componente de función
    // const [variable, método para actualizarla] = useState(valor Inicial);

    const [age, setage] = useState(22);

    const birthday = () =>{
        //Actualizamos el state
        setage(age+1);
    }


    return (
        <div>
            <h1>
                ¡Hola {props.name}! Desde un Componente Función
            </h1>                
            <h2>
                Tu edad es de:{age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir Años
                </button>
            </div>
        </div>        
    );
};


GreetingF.propTypes = {
    name:PropTypes.string,

};


export default GreetingF;
