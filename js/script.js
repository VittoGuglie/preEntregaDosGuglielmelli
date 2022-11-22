const usuarios = [
    {
        nombre: 'Gonzalo',
        email: 'hello@gmail.com',
        password: '123456789',
        numeroTarjetaSaved: '5555000099994444',
        vencimientoTarjetaSaved: '530',
        codigoSeguridadTarjetaSaved: '123'
    },
    {
        nombre: 'Roberto',
        email: 'roberto767@gmail.com',
        password: '987654321',
        numeroTarjetaSaved: '3555000099994444',
        vencimientoTarjetaSaved: '333',
        codigoSeguridadTarjetaSaved: '999'
    },
    {
        nombre: 'Victoria',
        email: 'vicky123@gmail.com',
        password: 'abc123ac1',
        numeroTarjetaSaved: '4555000099994444',
        vencimientoTarjetaSaved: '777',
        codigoSeguridadTarjetaSaved: '321'
    }
]
const inputMailLogin = document.getElementById('emailLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    modalCart = document.getElementById('modalCart'),
    btnVolver = document.getElementById('btnVolver'),
    elementosToggleables = document.querySelectorAll('.toggeable');
//Muestro el carrito de compras modificando el DOM.
const contenedorCarrito = document.getElementById('modalCart');
const verCarrito = document.getElementById('carrito');
//Opcion pagar del carrito de compras
const btnPagar = document.getElementById('pagar');

function ingresar(){
    const found = usuarios.find((usuario) => usuario.email == inputMailLogin.value);
    console.log(found)
    console.log(typeof found)
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
class videojuego{
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
    vender(){
        this.vendido = true;
    }
}
const videojuegos = [
    new videojuego('Cyberpunk 2077', 'CD PROJEKT RED', 'Sci-fi', 2020, 2199, 1, './assets/img/cyberpunk2077card.jpg', 'Cyberpunk 2077 es un mundo abierto, RPG de aventura y acción cituado en el oscuro futuro de Night City — una peligrosa megalopolis obsecionada con poder, glamour e incesantes modificaciones del cuerpo.'),
    new videojuego('A Plague Tale: Requiem', 'Asobo Studio', 'Action-Adventure', 2022, 3499, 2, './assets/img/aptrequiemcard.jpg', 'Vive una aventura desgarradora por un mundo asombroso y despiadado, y descubre el precio de salvar a tus seres queridos en una lucha por la supervivencia. Ataca desde las sombras o desata un infierno con armas, herramientas y poderes sobrenaturales.'),
    new videojuego('Temtem', 'Crema', 'Creature-collection adventure', 2022, 3149, 3, './assets/img/temtemcard.jpg', 'Temtem es una enorme experiencia multijugador basada en coleccionar criaturas. Vive aventuras con tus Temtem en el fascinante Archipiélago Aéreo. Atrápalos a todos, enfréntate a otros domadores, decora tu casa, únete a la aventura de un amigo y explora un dinámico mundo en línea.'),
    new videojuego('Slime Rancher', 'Monomi Park', 'Adventure', 2017, 1418, 4, './assets/img/slimeranchercard.jpg', 'Slime Rancher es la historia de Beatrix LeBeau, una intrépida y joven ranchera que se prepara para una vida a mil años luz de la Tierra en la Lejana, Lejana Pradera, donde prueba su suerte para ganarse la vida lidiando con slimes.'),
    new videojuego('Spider-man Remastered', 'Insomniac Games, Nixxes Software', 'Action', 2022, 4999, 5, './assets/img/spidermancard.jpg', 'En Marvels Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción. Ponte en la piel de un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel.')
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
//Agrego una función que elimine el producto del carrito:
const eliminarDelCarrito = (id) => {
    const producto = carrito.find((videojuego) => videojuego.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
};
//Función para vaciar todo el carrito por completo:
const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});
//funciones flecha para sumar iva:
const sumarIva = x => x*1.21;
//const restarDescuento = x => x*0.25;
//Creo una función que me calcule el total del carrito:
const totalCompra = document.getElementById('totalCompra');
const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((videojuego) => {
    total += sumarIva(videojuego.precio);
    });
    totalCompra.innerHTML = total;
};
// funcion para pagar 
const contPagar = document.getElementById('contPagar')
function mostrarPago(){
    btnPagar.addEventListener('click', () =>{
        let pagar = document.createElement('div');
        pagar.innerHTML = `<div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Visa
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Mastercard
            </label>
            </div>
            </div>
            <form>
            <label> numero de tarjeta:</label>
            <input type="name">
            <label> Fecha de vencimiento:</label>
            <input type="name">
            <label> Codigo de seguridad:</label>
            <input type="name">
            </form>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>`;
        contPagar.innerHTML += pagar;
    })
}
// let precioProductoUno = sumarIva(videojuegos[0].precio);
// let precioProductoDos = sumarIva(videojuegos[1].precio);
// let precioProductoTres = sumarIva(videojuegos[2].precio);
// let precioProductoCuatro = sumarIva(restarDescuento(videojuegos[3].precio));
// let precioProductoCinco = sumarIva(videojuegos[4].precio);
function mostrarVideojuegos(videojuegos) {
    contTarjetas.innerHTML = '';
    let content = videojuegos.forEach(videojuego => {
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
        const addToCartBtns = document.getElementById(`addToCart${videojuego.id}`);
        addToCartBtns.addEventListener('click', () => {
            agregarAlCarrito(videojuego.id);
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
                        <p class="card-text"> ${videojuego.precio} </p>
                        <button onClick = "eliminarDelCarrito(${videojuego.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                    </div>
                </div>
                `;
    });
    contenedorCarrito.innerHTML = aux;
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
    let warnings = ''
    if (!inputMailLogin.value || !inputPassLogin.value) {
        warnings += `Debe completar todos los campos`;
    } else {
        let data = ingresar(usuarios, inputMailLogin.value, inputPassLogin.value);
        if (!data) {
            warnings += `Usuario y/o contraseña erróneos`;
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

// if(ingresar()){
//     let opcion = prompt('Elegí el número del videojuego que quieras comprar: \n1- Cyberpunk ARS$2199 \n2- A Plague Tale: Requiem ARS$3499 \n3- Temtem ARS$3149 \n4- Slime Rancher ARS$1418 (75% off!) \n5- Spider-Man Remastered ARS$4999 \n6- Ver carrito. \nEscribí una X en caso de querer cerrar seción.')
//     while(opcion.toUpperCase()!='X'){
//         switch(opcion){
//             case '1':
//                 alert('Añadiste Cyberpunk al carrito. Precio a pagar: ARS$' + precioProductoUno + ' debido a los impuestos adicionales.');
//                 valorCarrito.push(precioProductoUno);
//                 valorCarrito.forEach(function(a){total += a;});
//                 break;
//             case '2':
//                 alert('Añadiste A Plague Tale: Requiem al carrito. Precio a pagar: ARS$' + precioProductoDos + ' debido a los impuestos adicionales.');
//                 valorCarrito.push(precioProductoDos);
//                 valorCarrito.forEach(function(a){total += a;});
//                 break;
//             case '3':
//                 alert('Añadiste Temtem al carrito. Precio a pagar: ARS$' + precioProductoTres + ' debido a los impuestos adicionales.');
//                 valorCarrito.push(precioProductoTres);
//                 valorCarrito.forEach(function(a){total += a;});
//                 break;
//             case '4':
//                 alert('Añadiste Slime Rancher al carrito. Precio a pagar: ARS$' + precioProductoCuatro + ' debido a los impuestos adicionales.');
//                 valorCarrito.push(precioProductoCuatro);
//                 valorCarrito.forEach(function(a){total += a;});
//                 break;
//             case '5':
//                 alert('Añadiste Spider-Man Remastered al carrito. Precio a pagar: ARS$' + precioProductoCinco + ' debido a los impuestos adicionales.');
//                 valorCarrito.push(precioProductoCinco);
//                 valorCarrito.forEach(function(a){total += a;});
//                 break;
//             case '6':
//                 let numeroTarjetaSaved = '5555000099994444';
//                 let vencimientoTarjetaSaved = '530';
//                 let codigoSeguridadTarjetaSaved = '123';
//                 alert('Usted lleva en su carrito un total de ARS$' + total);
//                 let pago = prompt('Elegí el tipo de tarjeta que posee: \n1- Visa \n2- Mastercard \n3- Vaciar carrito');
//                 switch(pago){
//                     case '1':
//                         let numeroTarjeta = prompt('Ingrese el número de su tarjeta:');
//                         let vencimientoTarjeta = prompt('Ingrese la fecha de vencimiento:');
//                         let codigoSeguridadTarjeta = prompt('Ingrese el código de seguridad:');
//                         if(numeroTarjeta==numeroTarjetaSaved&&vencimientoTarjeta==vencimientoTarjetaSaved&&codigoSeguridadTarjeta==codigoSeguridadTarjetaSaved){
//                             alert('Pago exitoso. Disfrute su videojuego.')
//                         }else{
//                             alert('Los datos ingresados son incorrectos')
//                         }
//                         break;
//                     case '2':
//                         let numeroTarjetaDos = prompt('Ingrese el número de su tarjeta:');
//                         let vencimientoTarjetaDos = prompt('Ingrese la fecha de vencimiento:');
//                         let codigoSeguridadTarjetaDos = prompt('Ingrese el código de seguridad:');
//                         if(numeroTarjetaDos==numeroTarjetaSaved&&vencimientoTarjetaDos==vencimientoTarjetaSaved&&codigoSeguridadTarjetaDos==codigoSeguridadTarjetaSaved){
//                             alert('Pago exitoso. Disfrute su videojuego.')
//                         }else{
//                             alert('Los datos ingresados son incorrectos');
//                         }
//                     case '3':
//                         valorCarrito.splice(0);
//                         total = 0;
//                         alert('Total a pagar: ARS$' + total);
//                         break;
//                     default: 
//                         alert('La opción elegida no es correcta.');
//                         break;
//                 }
//                 break;
//             default:
//                 alert('Elegiste una opción inválida.')
//                 break;
//         }
//         opcion = prompt('Elegí el número del videojuego que quieras comprar: \n1- Cyberpunk ARS$2199 \2- A Plague Tale: Requiem ARS$3499 \n3- Temtem ARS$3149 \n4- Slime Rancher ARS$1418 (75% off!) \n5- Spider-Man Remastered ARS$4999 \n6- Pagar. \nEscribí una X en caso de querer cerrar seción.')
//     }
// }else{
//     alert('Ingreso fallido. Pruebe creando una cuenta o haga click en olvidé mi contraseña.')
// }