function ListaProductos() {
    const productos = [
        { id: 1, nombre: 'Abrigos', precio: 20 },
        { id: 2, nombre: 'Remeras', precio: 40 },
        { id: 3, nombre: 'Accesorios', precio: 60 },
    ];

    return (
        <ol>
            {productos.map((producto) => (
                <li key={producto.id}>
                    {producto.nombre} - ${producto.precio}
                </li>
            ))}
        </ol>
    );
}
export default ListaProductos;