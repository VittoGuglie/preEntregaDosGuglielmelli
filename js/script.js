let usuarios = []
fetch('./js/usuariosDB.json')
.then((res) => res.json())
.then((data) => {
    usuarios = data
})
const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    modalCart = document.getElementById('modalCart'),
    btnVolver = document.getElementById('btnVolver'),
    elementosToggleables = document.querySelectorAll('.toggeable'),
    contBtns = document.getElementById('contenedorBtns'),
    contTarjetas = document.getElementById('tarjetas');
//Muestro el carrito de compras modificando el DOM.
const contenedorCarrito = document.getElementById('modalCart');
const verCarrito = document.getElementById('carrito');
//funcion para ingresar
function ingresar(usuarios){
    const found = usuarios.find((usuario) => usuario.email == inputMailLogin.value);
    if (typeof found === 'undefined') {
        return false;
    } else {
        if (found.password != inputPassLogin.value) {
            return false;
        } else {
            return found;
        }
    }
}
// funcion para guardar datos del usuario
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass,
        'card': usuarioDB.card,
        'vencimiento': usuarioDB.vencimiento,
        'security': usuarioDB.security
    }
    storage.setItem('usuario', JSON.stringify(usuario));
}
function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}
function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}
class Videojuego{
    constructor(nombre, desarrollador, genero, fecha, precio, id, img, descripcion){
        this.nombre = nombre;
        this.desarrollador = desarrollador;
        this.genero = genero;
        this.fecha = parseInt(fecha);
        this.precio = parseFloat(precio);
        this.id = id;
        this.img = img;
        this.descripcion = descripcion;
        this.vendido = false;
    }
}
const videojuegos = [
    new Videojuego('Cyberpunk 2077', 'CD PROJEKT RED', 'Sci-fi', 2020, 2199, 1, './assets/img/cyberpunk2077card.jpg', 'Cyberpunk 2077 es un mundo abierto, RPG de aventura y acción cituado en el oscuro futuro de Night City — una peligrosa megalopolis obsecionada con poder, glamour e incesantes modificaciones del cuerpo.'),
    new Videojuego('A Plague Tale: Requiem', 'Asobo Studio', 'Action-Adventure', 2022, 3499, 2, './assets/img/aptrequiemcard.jpg', 'Vive una aventura desgarradora por un mundo asombroso y despiadado, y descubre el precio de salvar a tus seres queridos en una lucha por la supervivencia. Ataca desde las sombras o desata un infierno con armas, herramientas y poderes sobrenaturales.'),
    new Videojuego('Temtem', 'Crema', 'Creature-collection adventure', 2022, 3149, 3, './assets/img/temtemcard.jpg', 'Temtem es una enorme experiencia multijugador basada en coleccionar criaturas. Vive aventuras con tus Temtem en el fascinante Archipiélago Aéreo. Atrápalos a todos, enfréntate a otros domadores, decora tu casa, únete a la aventura de un amigo y explora un dinámico mundo en línea.'),
    new Videojuego('Slime Rancher', 'Monomi Park', 'Adventure', 2017, 1418, 4, './assets/img/slimeranchercard.jpg', 'Slime Rancher es la historia de Beatrix LeBeau, una intrépida y joven ranchera que se prepara para una vida a mil años luz de la Tierra en la Lejana, Lejana Pradera, donde prueba su suerte para ganarse la vida lidiando con slimes.'),
    new Videojuego('Spider-man Remastered', 'Insomniac Games, Nixxes Software', 'Action', 2022, 4999, 5, './assets/img/spidermancard.jpg', 'En Marvels Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción. Ponte en la piel de un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel.')
]
//Creo el carrito de compras y una función que busque el producto por id y lo agregue al carrito.
const carrito = [];
verCarrito.addEventListener('click', actualizarCarrito);
const agregarAlCarrito = (id) => {
    const producto = videojuegos.find((videojuego) => videojuego.id === id);
    const productoEnCarrito = carrito.find((videojuego) => videojuego.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
};
//Eliminar un producto del carrito:
const eliminarDelCarrito = (id) => {
    Swal.fire({
        title: 'Eliminar producto',
        text: '¿Está seguro de que quiere eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No, cancelar',
        backdrop: '#00000055'
    }).then((result) => {
        if(result.isConfirmed){
            const producto = carrito.find((videojuego) => videojuego.id === id);
            carrito.splice(carrito.indexOf(producto), 1);
            actualizarCarrito();
            swal.fire('Eliminado', 'El producto ha sido eliminado', 'success')
        }
    })
};
//Opcion vaciar carrito por completo: 
const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Vaciar carrito',
        text: '¿Está seguro de que quiere vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, vaciar carrito',
        cancelButtonText: 'No, cancelar',
        backdrop: '#00000055'
    }).then((result) => {
        if(result.isConfirmed){
            carrito.splice(0, carrito.length);
            actualizarCarrito();
            swal.fire('Eliminado', 'El carrito ha sido vaciado', 'success')
        }
    })
});
//funciones flecha para sumar iva:
const sumarIva = x => x*1.21;
//Creo una función que me calcule el total del carrito:
const totalCompra = document.getElementById('totalCompra');
const totalPagar = document.getElementById('totalPagar');
const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((videojuego) => {
    total += sumarIva(videojuego.precio);
    });
    totalCompra.innerHTML = total;
    totalPagar.innerHTML = total;
};
// funcion para validar pago y pagar con un evento:
const btnPagar = document.getElementById('btnPagar'),
    inputCardNumber = document.getElementById('cardNumber'),
    inputExpressNumber = document.getElementById('expressNumber'),
    inputSecurityNumber = document.getElementById('securityNumber');
function validarPagar(){
    const validacionCN = usuarios.find((usuario) => usuario.cardNumber == inputCardNumber.value),
        validacionEN = usuarios.find((usuario) => usuario.vencimientoSaved == inputExpressNumber.value),
        validacionSN = usuarios.find((usuario) => usuario.codigoSeguridadSaved == inputSecurityNumber.value);
    if (typeof validacionCN === 'undefined') {
        return false;
    } else if (validacionCN.cardNumber != inputCardNumber.value) {
        return false;
    } else if (typeof validacionEN === 'undefined'){
        return false;
    } else if (validacionEN.vencimientoSaved != inputExpressNumber.value){
        return false;
    } else if (typeof validacionSN === 'undefined'){
        return false;
    } else if (validacionSN.codigoSeguridadSaved != inputSecurityNumber.value){
        return false;
    } else {
        return true;
    }
}
btnPagar.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputCardNumber.value || !inputExpressNumber.value || !inputSecurityNumber.value) {
        Toastify({text:'Completar todos los campos', 
        duration: 3000,
        style:{
            color: 'white',
            height: 80,
            background: 'linear-gradient(to right, red, violet)'
        }}).showToast();
    } else {
        let data = validarPagar(usuarios, inputCardNumber.value, inputExpressNumber.value, inputSecurityNumber.value);
        if (!data) {
            Toastify({text:'Datos incorrectos', 
            duration: 3000,
            style:{
                color: 'white',
                height: 80,
                background: 'linear-gradient(to right, red, violet)'
            }}).showToast();
        } else {
            Toastify({text:'Gracias por su compra', 
                duration: 3000,
                style:{
                    color: 'white',
                    height: 80,
                    background: 'linear-gradient(to right, green, lime)'
            }}).showToast();
            carrito.splice(0, carrito.length);
            actualizarCarrito();
        }
    }
});
// funcion para mostrar productos:
function mostrarVideojuegos(videojuegos) {
    contTarjetas.innerHTML = '';
    videojuegos.forEach(videojuego => {
        let html = `<div class="card cardVideojuego" id="tarjeta${videojuego.nombre}">
                <h3 class="card-header" id="nombreVideojuego">${videojuego.nombre}</h3>
                <img src="${videojuego.img}" alt="${videojuego.nombre}" class="card-img-bottom" id="fotoVideojuego">
                <div class="card-body">
                    <p class="card-text" id="precioVideojuego">Precio: ARS$ ${videojuego.precio}</p>
                    <p class="card-text" id="fechaVideojuego">Fecha de lanzamiento: ${videojuego.fecha}</p>
                    <p class="card-text" id="generoVideojuego">Genero: ${videojuego.genero}</p>
                    <p class="card-text" id="desarrolladorVideojuego">Desarrollador: ${videojuego.desarrollador}</p>
                    <p class="card-text" id="descripcionVideojuego">${videojuego.descripcion}</p>
                    <button class="btn btn-dark" id="addToCart${videojuego.id}">Añadir al carrito</button>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
    videojuegos.forEach(videojuego => {
        //agregar un evento al boton para agregar al carrito:
        const addToCartBtns = document.getElementById(`addToCart${videojuego.id}`);
        addToCartBtns.addEventListener('click', () => {agregarAlCarrito(videojuego.id);
        });
    });
}
function actualizarCarrito() {
    let aux = '';
    carrito.forEach((videojuego) => {
        aux += `
                <div class="card col-xl-3 col-md-6 col-sm-12">
                    <img src="${videojuego.img}" class="card-img-top img-fluid py-3">
                    <div class="card-body">
                        <h3 class="card-title"> ${videojuego.nombre} </h3>
                        <p class="card-text">ARS$ ${videojuego.precio} </p>
                        <button id= "eliminarDelCarrito${videojuego.id}" class="btn btn-primary"> Eliminar del Carrito </button>
                    </div>
                </div>
                `;
    });
    contenedorCarrito.innerHTML = aux;
    carrito.forEach(videojuego => {
        const eliminarDelCarritoBtn = document.getElementById(`eliminarDelCarrito${videojuego.id}`);
        eliminarDelCarritoBtn.addEventListener('click', () => {
            eliminarDelCarrito(videojuego.id);})
    })
    calcularTotalCompra();
}
function presentarInfo(videojuegos, clase) {
    videojuegos.forEach(videojuego => {
        videojuego.classList.toggle(clase);
    });
}
function estaLogueado(usuario) {
    if (usuario) {
        saludar(usuario);
        mostrarVideojuegos(videojuegos);
        presentarInfo(elementosToggleables, 'd-none');
    }
}
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputMailLogin.value || !inputPassLogin.value) {
        Swal.fire({
            title: 'Completar todos los campos',
            icon: 'warning',
            backdrop: '#00000055'
        })
    } else {
        let data = ingresar(usuarios, inputMailLogin.value, inputPassLogin.value);
        if (!data) {
            Swal.fire({
                title: 'E-mail y/o contraseña incorrectos.',
                icon: 'warning',
                backdrop: '#00000055'
            })
        } else {
            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            modal.hide();
            mostrarVideojuegos(videojuegos);
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});
btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});
estaLogueado(recuperarUsuario(localStorage));
