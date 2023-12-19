function nuevoMonto(id) {
  cantidad = document.getElementById("cantidad-"+id).value
  monto = document.getElementById("monto-"+id)
  montoOriginal = monto.getAttribute("precio").match(/\d+/g)
  moneda = monto.getAttribute("precio").replace(/\d+/g, '')
  total = montoOriginal * cantidad
  precio = moneda+total
  monto.value = precio
}

function cargarDatos() {
  
  identificador = document.getElementById("id_producto").value
  urlImg = document.getElementById("img_producto").value
  titulo = document.getElementById("titulo_producto").value
  marcaP = document.getElementById("marca_producto").value
  descripcion = document.getElementById("descripcion_producto").value
  monto = document.getElementById("monto_producto").value
  
  id = `${identificador}`
  img = `${urlImg}`
  nombre = `${titulo}`
  marca = `${marcaP}`
  descrip = `${descripcion}`
  precio = `${monto}`

  modal.style.display = "none"
  agregarProducto(id,img,nombre,marca,descrip,precio)
}

function cerrarModal() {
    modal.style.display = "none"
}

function abrirModal() {
    modal = document.getElementById("myModal")
    modal.style.display = "block"
    divs = document.getElementsByClassName("card").length;
    nuevo_id = divs + 1
    document.getElementById("id_producto").setAttribute("value",nuevo_id)
    document.getElementById("img_producto").setAttribute("value","images/"+nuevo_id+".png")
}

function quitarProducto(id) {
  producto = document.getElementById(id)

  producto.style.display = "none"
}

function agregarProducto(id,img,nombre,marca,descrip,monto){

  // Creo el div card
  const container = document.querySelector(".container__cards")
  const divCard = document.createElement("div")
  divCard.setAttribute("id", id)
  divCard.className += "card"
  container.appendChild(divCard)

  //Creo el div cover y la descripcion
  const contCard = document.querySelector("#\\3"+id)
  const divCover = document.createElement("div")
  divCover.className += "cover"
  divCover.setAttribute("id", "cover"+id)
  contCard.appendChild(divCover)
  const divDescrip = document.createElement("div")
  divDescrip.className += "description"
  divDescrip.setAttribute("id", "description"+id)
  contCard.appendChild(divDescrip)

  //Creo la imagen y div img dentro de Cover
  const contCover = document.querySelector("#cover"+id)
  const imgCover = document.createElement("img")
  imgCover.src = img
  contCover.appendChild(imgCover)
  const divImg = document.createElement("div")
  divImg.className += "img__back"
  contCover.appendChild(divImg)

  // Creo el titulo, marca, texto precio y cantidad
  const contDescrip = document.querySelector("#description"+id)
  const tituloDescrip = document.createElement("h2")
  tituloDescrip.className += "articulo"
  tituloDescrip.innerHTML= nombre
  contDescrip.appendChild(tituloDescrip)
  const marcaDescrip = document.createElement("h2")
  marcaDescrip.className += "marca"
  marcaDescrip.innerHTML = marca
  contDescrip.appendChild(marcaDescrip)
  const textDescrip = document.createElement("p")
  textDescrip.innerHTML = descrip
  contDescrip.appendChild(textDescrip)
  divPrecio = document.createElement("div")
  divPrecio.className += "precio"
  divPrecio.setAttribute("id", "precio"+id)
  contDescrip.appendChild(divPrecio)

  //Creo el boton del carrito

  const btnComprar = document.createElement("button")
  btnComprar.className += "btn-neon"
  btnComprar.setAttribute("onclick", "quitarProducto("+id+")")
  btnComprar.setAttribute("id", "btn-neon"+id)
  btnComprar.innerHTML = "Agregar al carro"
  contDescrip.appendChild(btnComprar)

  //Creo efecto Neon al boton

  contBtn = document.querySelector("#btn-neon"+id)
  spanUnobtn = document.createElement("span")
  spanUnobtn.setAttribute("id","span1")
  contBtn.appendChild(spanUnobtn)
  spanDosbtn = document.createElement("span")
  spanDosbtn.setAttribute("id","span2")
  contBtn.appendChild(spanDosbtn)
  spanTresbtn = document.createElement("span")
  spanTresbtn.setAttribute("id","span3")
  contBtn.appendChild(spanTresbtn)
  spanCuatrobtn = document.createElement("span")
  spanCuatrobtn.setAttribute("id","span4")
  contBtn.appendChild(spanCuatrobtn)

  //Creo precio y cantidad
  const contPrecio = document.querySelector("#precio"+id)
  const precio = document.createElement("input")
  precio.className += "monto"
  precio.setAttribute("disabled", "true")
  precio.setAttribute("value", monto)
  precio.setAttribute("id", "monto-"+id)
  precio.setAttribute("precio", monto)
  contPrecio.appendChild(precio)

  const cantidad = document.createElement("input")
  cantidad.setAttribute("id", "cantidad-"+id)
  cantidad.className += "cantidad"
  cantidad.setAttribute("type", "number")
  cantidad.setAttribute("value", "1")
  cantidad.setAttribute("onchange", "nuevoMonto("+id+")")
  contPrecio.appendChild(cantidad)

}