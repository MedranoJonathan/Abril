function calcularTotal() {
    var cantidadProducto1 = parseInt(document.getElementById("cantidadsodaindividual").value);
    var cantidadProducto2 = parseInt(document.getElementById("cantidadcajon").value);
    var nombre = document.getElementById("nombre").value;
    var precioProducto1 = 100;
    var precioProducto2 = 550;
    var total = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2);

    alert(nombre + " compra realizada, el precio total de la compra es: $" + total);
  }