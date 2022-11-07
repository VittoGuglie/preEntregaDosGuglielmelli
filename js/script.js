let savedEmail = 'hello@gmail.com';
let savedPass = '123456789'
function ingresar(){
    let ingresar = false;
    for (let i = 2; i>=0; i--){
        let userEmail = prompt('Ingrese su e-mail:');
        let userPass = prompt('Ingrese su contraseña:');
        if (userEmail==savedEmail&&userPass==savedPass){
            alert('Ingreso exitoso. Bienvenide a Laelaps, su mayor distribuidor de videojuegos para PC.');
            ingresar = true;
            break;
        }else{
            alert('Datos ingresados erróneos.');
        }
    }
    return ingresar;
}
class videojuego{
    constructor(nombre, desarrollador, genero, fecha, precio, id){
        this.nombre = nombre;
        this.desarrollador = desarrollador;
        this.genero = genero;
        this.fecha = parseInt(fecha);
        this.precio = parseFloat(precio);
        this.id = id;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}
const videojuegos = [
    new videojuego('Cyberpunk 2077', 'CD PROJEKT RED', 'Sci-fi', 2020, 2199, 1),
    new videojuego('A Plague Tale: Requiem', 'Asobo Studio', 'Action-Adventure', 2022, 3499, 2),
    new videojuego('Temtem', 'Creature-collection adventure', 'Crema', 2022, 3149, 3),
    new videojuego('Slime Rancher', 'Adventure', 'Monomi Park', 2017, 1418, 4),
    new videojuego('Spider-man Remastered', 'Action', 'Insomniac Games, Nixxes Software', 2022, 4999, 5)
]
const sumarIva = x => x*1.21;
const restarDescuento = x => x*0.25;
let precioProductoUno = sumarIva(videojuegos[0].precio);
let precioProductoDos = sumarIva(videojuegos[1].precio);
let precioProductoTres = sumarIva(videojuegos[2].precio);
let precioProductoCuatro = sumarIva(restarDescuento(videojuegos[3].precio));
let precioProductoCinco = sumarIva(videojuegos[4].precio);
let valorCarrito = [];
let total = 0;
if(ingresar()){
    let opcion = prompt('Elegí el número del videojuego que quieras comprar: \n1- Cyberpunk ARS$2199 \n2- A Plague Tale: Requiem ARS$3499 \n3- Temtem ARS$3149 \n4- Slime Rancher ARS$1418 (75% off!) \n5- Spider-Man Remastered ARS$4999 \n6- Ver carrito. \nEscribí una X en caso de querer cerrar seción.')
    while(opcion.toUpperCase()!='X'){
        switch(opcion){
            case '1':
                alert('Añadiste Cyberpunk al carrito. Precio a pagar: ARS$' + precioProductoUno + ' debido a los impuestos adicionales.');
                valorCarrito.push(precioProductoUno);
                valorCarrito.forEach(function(a){total += a;});
                break;
            case '2':
                alert('Añadiste A Plague Tale: Requiem al carrito. Precio a pagar: ARS$' + precioProductoDos + ' debido a los impuestos adicionales.');
                valorCarrito.push(precioProductoDos);
                valorCarrito.forEach(function(a){total += a;});
                break;
            case '3':
                alert('Añadiste Temtem al carrito. Precio a pagar: ARS$' + precioProductoTres + ' debido a los impuestos adicionales.');
                valorCarrito.push(precioProductoTres);
                valorCarrito.forEach(function(a){total += a;});
                break;
            case '4':
                alert('Añadiste Slime Rancher al carrito. Precio a pagar: ARS$' + precioProductoCuatro + ' debido a los impuestos adicionales.');
                valorCarrito.push(precioProductoCuatro);
                valorCarrito.forEach(function(a){total += a;});
                break;
            case '5':
                alert('Añadiste Spider-Man Remastered al carrito. Precio a pagar: ARS$' + precioProductoCinco + ' debido a los impuestos adicionales.');
                valorCarrito.push(precioProductoCinco);
                valorCarrito.forEach(function(a){total += a;});
                break;
            case '6':
                let numeroTarjetaSaved = '5555000099994444';
                let vencimientoTarjetaSaved = '530';
                let codigoSeguridadTarjetaSaved = '123';
                alert('Usted lleva en su carrito un total de ARS$' + total);
                let pago = prompt('Elegí el tipo de tarjeta que posee: \n1- Visa \n2- Mastercard');
                switch(pago){
                    case '1':
                        let numeroTarjeta = prompt('Ingrese el número de su tarjeta:');
                        let vencimientoTarjeta = prompt('Ingrese la fecha de vencimiento:');
                        let codigoSeguridadTarjeta = prompt('Ingrese el código de seguridad:');
                        if(numeroTarjeta==numeroTarjetaSaved&&vencimientoTarjeta==vencimientoTarjetaSaved&&codigoSeguridadTarjeta==codigoSeguridadTarjetaSaved){
                            alert('Pago exitoso. Disfrute su videojuego.')
                        }else{
                            alert('Los datos ingresados son incorrectos')
                        }
                        break;
                    case '2':
                        let numeroTarjetaDos = prompt('Ingrese el número de su tarjeta:');
                        let vencimientoTarjetaDos = prompt('Ingrese la fecha de vencimiento:');
                        let codigoSeguridadTarjetaDos = prompt('Ingrese el código de seguridad:');
                        if(numeroTarjetaDos==numeroTarjetaSaved&&vencimientoTarjetaDos==vencimientoTarjetaSaved&&codigoSeguridadTarjetaDos==codigoSeguridadTarjetaSaved){
                            alert('Pago exitoso. Disfrute su videojuego.')
                        }else{
                            alert('Los datos ingresados son incorrectos');
                        }
                    default: 
                        alert('La opción elegida no es correcta.');
                        break;
                }
                break;
            default:
                alert('Elegiste una opción inválida.')
                break;
        }
        opcion = prompt('Elegí el número del videojuego que quieras comprar: \n1- Cyberpunk ARS$2199 \2- A Plague Tale: Requiem ARS$3499 \n3- Temtem ARS$3149 \n4- Slime Rancher ARS$1418 (75% off!) \n5- Spider-Man Remastered ARS$4999 \n6- Pagar. \nEscribí una X en caso de querer cerrar seción.')
    }
}else{
    alert('Ingreso fallido. Pruebe creando una cuenta o haga click en olvidé mi contraseña.')
}