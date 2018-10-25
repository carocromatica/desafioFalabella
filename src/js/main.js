/* Código para mostrar y ocultar elementos */
const mostrarProductosDestacados = () => {
  document.getElementById('Productos-Destacados').style.display = 'block';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('Filtro-Productos').style.display = 'none';
  document.getElementById('Comparacion').style.display = 'none';
  document.getElementById('Filtro-Sellers').style.display = 'none';
  document.getElementById('Productos-Seller').style.display = 'none';
}

const mostrarFiltroProductos = () => {
  document.getElementById('Productos-Destacados').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('Filtro-Productos').style.display = 'block';
  document.getElementById('Comparacion').style.display = 'none';
  document.getElementById('Filtro-Sellers').style.display = 'none';
  document.getElementById('Productos-Seller').style.display = 'none';
}

const mostrarComparacion = () => {
  document.getElementById('Productos-Destacados').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('Filtro-Productos').style.display = 'none';
  document.getElementById('Comparacion').style.display = 'block';
  document.getElementById('Filtro-Sellers').style.display = 'none';
  document.getElementById('Productos-Seller').style.display = 'none';
}

const mostrarFiltroSellers = () => {
  document.getElementById('Productos-Destacados').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('Filtro-Productos').style.display = 'none';
  document.getElementById('Comparacion').style.display = 'none';
  document.getElementById('Filtro-Sellers').style.display = 'block';
  document.getElementById('Productos-Seller').style.display = 'none';
}

const mostrarProductosSeller = () => {
  document.getElementById('Productos-Destacados').style.display = 'none';
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('Filtro-Productos').style.display = 'none';
  document.getElementById('Comparacion').style.display = 'none';
  document.getElementById('Filtro-Sellers').style.display = 'none';
  document.getElementById('Productos-Seller').style.display = 'block';
}

document.getElementById('ingresar').addEventListener('click', () => {
  mostrarProductosDestacados();
})

