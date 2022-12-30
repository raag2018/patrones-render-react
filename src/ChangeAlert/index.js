import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div className="container ChangeAlert-bg">
                <div className="ChangeAlert-container">
                     <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                     <p>¿Quieres sincronizar tus TODOs?</p>
                    <button className="btn btn-info TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >
                        Si
                    </button>
                </div>
                
            </div>
            
        );
    }else{
        return (
            <p></p>
        );
    }
   
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export {ChangeAlertWithStorageListener};