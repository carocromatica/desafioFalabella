
  const index = function() {
  const puppeteer = require('puppeteer');
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    return title;
  })
  
  
  (async () => {
    try {
      const url = 'https://listado.mercadolibre.cl/'+title+'#D[A:'+title+']';
      const navegador = await puppeteer.launch()
      const pagina = await navegador.newPage()
      await pagina.goto(url)
      const html = await pagina.content()
      const informacion = await pagina.evaluate(()=> {
        const productos = [...document.querySelectorAll('.item__title')
      ].map((nodoProducto) => nodoProducto.innerText);
  
      const precios = [...document.querySelectorAll('.price__fraction')
      ].map((nodoPrecio) => nodoPrecio.innerHTML);
      return productos.map((producto, i) => (JSON.stringify({producto: producto, precio: precios[i]})))
  
      })
  
      console.log(informacion)
      await navegador.close()
    } catch (e) {
  
    }
  })()
}

module.exports = index


