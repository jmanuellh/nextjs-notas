const NotasItem = (props) => {
    const nota = props.nota;
    <tr>
        <td>nota.titulo</td>
        <td>nota.contenido</td>
        <td>
            <button>Editar</button>
            <button>Eliminar</button>
        </td>
    </tr>
}

const NotasLista = (props) => {
    const notas = props.notas;
    const lista = notas.map(nota => {
        <NotasItem  key={nota.id} nota={nota} />
    })
    return lista;
}

const TablaNotas = () => {
    return (
        <div>
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
                    <NotasLista notas={[]} />
                </tbody>
            </table>
        </div>
    );
}

export default TablaNotas;