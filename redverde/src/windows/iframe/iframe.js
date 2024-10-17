import {userState} from "react";
import MenuCliente from "../cliente/menuCliente/menuCliente";

const Iframe = () => {

    const {ventana, setVentana} = userState("hola");
    function getVentana(nombreVentana){
        switch(nombreVentana){
            case "menuCliente":
                setVentana(<MenuCliente></MenuCliente>)
        }
    }

    return (
        <div className="iframe">  
            {ventana}
        </div>
    );
}
 
export default Iframe;