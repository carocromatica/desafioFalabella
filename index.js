const puppeteer = require('puppeteer');


(async () => {
  try {
    const navegador = await puppeteer.launch()
    const pagina = await navegador.newPage()
    await pagina.goto('https://listado.mercadolibre.cl/samsung-galaxy-s8-64gb#D[A:samsung-galaxy-s8-64gb]')
    const html = await pagina.content()
    console.log(html);

    let informacion = await pagina.evaluate(()=> {
      const productos = [...document.querySelectorAll('.item__title')
    ].map((nodoProducto) => nodoProducto.innerText);

    const precios = [...document.querySelectorAll('.price__fraction')
    ].map((nodoPrecio) => nodoPrecio.innerHTML);

    return productos.map((producto, i) => ({producto: producto, precio: precios[i]}))

    })

    console.log(informacion)
    await navegador.close()
  } catch (e) {

  }
})()