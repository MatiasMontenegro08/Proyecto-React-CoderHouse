import { createContext, useState } from "react";

//Creamos contexto
const CartContext = createContext()

//Este componente sirve como proveedor del contexto.
const CartProvider = ({ children }) => {

    //Declaramos las variables globales que queremos compartir con otros componentes
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnElCarrito(productoNuevo.id);

        if (condicion) {
            const nuevoCarrito = carrito.map((productoCarrito) => {
                if (productoCarrito.id === productoNuevo.id) {
                    return { ...productoCarrito, cantidad: productoCarrito.cantidad + productoNuevo.cantidad }
                } else {
                    return productoCarrito
                }
            })
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, productoNuevo]) //hacemos spreed para copiar los productos anteriores y luego agregamos el nuevo, si no me reemplaza todo lo anterior.
        }
    }

    const estaEnElCarrito = (idProducto) => {
        const condicional = carrito.some((productoCarrito) => productoCarrito.id === idProducto); //retorna true si la iteración se cumple.
        return condicional;
    }

    const cantidadTotal = () => {
        const total = carrito.reduce((acc, productoDelCarrito) => acc + productoDelCarrito.cantidad, 0);
        return total;
    }

    const precioTotal = () => {
        const precio = carrito.reduce((acc, productoDelCarrito) => acc + (productoDelCarrito.precio * productoDelCarrito.cantidad), 0);
        return precio;
    }

    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto);
        setCarrito(productosFiltrados);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const actualizarCantidad = (idProducto, accion) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(producto => {
                if (producto.id === idProducto) {
                    let nuevaCantidad = producto.cantidad;

                    // Aumentar cantidad si es menor a stock disponible
                    if (accion === 'aumentar' && nuevaCantidad < producto.stock) {
                        nuevaCantidad += 1;
                    }

                    // Disminuir cantidad si es mayor a 1
                    if (accion === 'disminuir' && nuevaCantidad > 1) {
                        nuevaCantidad -= 1;
                    }

                    return { ...producto, cantidad: nuevaCantidad };
                }
                return producto;
            })
        );
    };

    return (
        <CartContext.Provider value={{ carrito, setCarrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito, actualizarCantidad /* mandamos todas las variables por aca como un objeto*/ }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }