import Swal from "sweetalert2";

const addPopUp = (producto,count) => {
    return Swal.fire({
        title: producto.title,
        text: `La cantidad de ${count} ${producto.title} han sido agregado(s) al carrito`,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3500
        })
}

const deleteItemPopUp = (productoEliminado) => {
    Swal.fire({
        title: productoEliminado.title,
        text: `Se elimino del carrito el Producto ${productoEliminado.title}`,
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000
        })
}

const deleteAllPopUp = () => {
    Swal.fire({
        title: 'Se vació el Carrito',
        text: `Se eliminaron todos los productos del Carrito`,
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000
        })
}

export { addPopUp , deleteItemPopUp, deleteAllPopUp};