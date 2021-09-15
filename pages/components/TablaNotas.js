import { useState, useEffect } from "react";
import axios from "axios";

const urlBase = "https://erpbackaspnetcore31.azurewebsites.net/api/notas";







const TablaNotas = () => {
    const AgregarNota = () => {
        const [nota, setNota] = useState({});
    
        const agregar = (event) => {
            event.preventDefault();
            const urlBase = "https://erpbackaspnetcore31.azurewebsites.net/api/notas";
        
        
            axios.post(urlBase, nota).then((r) => {
                setNotas([...notas, r.data]);
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

    const eliminarNota = (id, index) => {
        axios.delete(urlBase + "/" + id).then(r => {
            let nuevasNotas = [...notas];
            // const indexNota = notas.findIndex(nota => nota.id === r.data.id);
            nuevasNotas.splice(index, 1)
            setNotas(nuevasNotas);
        })
    }

    const NotasItem = (props) => {
        const nota = props.nota;
        const index = props.index;
        return (
        <tr>
            <td>{nota.titulo}</td>
            <td>{nota.contenido}</td>
            <td>
                <button>Editar</button>
                <button onClick={() => eliminarNota(nota.id, index)}>Eliminar</button>
            </td>
        </tr>);
    }
    
    const NotasLista = (props) => {
        const notas = props.notas;
        const lista = notas.map((nota, index) => (
            <NotasItem  key={nota.id} nota={nota} index={index} />
        ));
        return lista;
    }

    const [notas, setNotas] = useState([]);

    useEffect(() => {
        obtenerNotas();
    }, []);
    const obtenerNotas = () => {
        const urlBase = "https://erpbackaspnetcore31.azurewebsites.net/api/notas";

        axios.get(urlBase).then(r => {
            setNotas(r.data);
        })
    }
    return (
        <div>
            <AgregarNota />
            <table>
                <thead>
                    <tr>
                        <th>
                            Titulo
                        </th>
                        <th>
                            Contenido
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <NotasLista notas={notas} />
                </tbody>
            </table>
        </div>
    );
}

export default TablaNotas;