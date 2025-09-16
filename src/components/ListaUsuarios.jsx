import React from 'react'

function ListaUsuario({usuario}) {
    
    return (
        <>
            <div>Lista de Usuarios</div>
            <ul>
                {usuario.map(persona => (
                    <li key={persona.id}>
                        <b>{persona.nombre}</b>: {persona.descripcion}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ListaUsuario