// Laboratorio TDD: carrito de compras
// Escribe aquí el código SOLO después de tener una prueba en rojo.

export class Carrito {
  constructor() {
    this.productos = [];
  }

  agregar(nombre, precio, cantidad = 1) {
    this.productos.push({ nombre, precio, cantidad });
  }

  cantidadDeItems() {
    return this.productos.reduce((suma, p) => suma + p.cantidad, 0);
  }

  subtotal() {
    return this.productos.reduce((suma, p) => suma + p.precio * p.cantidad, 0);
  }
}