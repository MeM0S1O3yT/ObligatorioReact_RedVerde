import {userState} from "react";

const Iframe = () => {

    const {ventana, setVentana} = userState("hola");
    function getVentana(nombreVentana){
        switch(nombreVentana){
            case "menuCliente":
                set
        }
    }

    return (
        <div className="iframe">  
            {ventana}
        </div>
    );
}
 
export default Iframe;