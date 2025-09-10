import React from 'react'

function ListaUsuarios() {
    const usuarios = ['Silvia', 'Luis', 'Matias', 'Sabrina']

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>{usuario}</li>
                ))}
            </ul>
        </div>
    )
}

export  {ListaUsuarios}