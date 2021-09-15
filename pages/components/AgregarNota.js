import { useState, useEffect } from "react";
import axios from "axios";

const AgregarNota = () => {
    const [nota, setNota] = useState({});

    const agregar = (event) => {
        event.preventDefault();
        const urlBase = "https://erpbackaspnetcore31.azurewebsites.net/api/notas";
    
    
        axios.post(urlBase, nota).then(() => {
            
        });
    }

    const cambioNota = (event) => {
        setNota({...nota, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <form>
                <div>
                    <label>
                        Titulo
                    </label>
                    <input type="text" name="titulo" onChange = {cambioNota} />
                </div>
                <div>
                    <label>
                        Contenido
                    </label>
                    <input type="text" name="contenido" onChange = {cambioNota} />
                </div>
                <div>
                    <button onClick={agregar}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarNota;