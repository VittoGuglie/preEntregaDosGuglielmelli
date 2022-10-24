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
if(ingresar()){
    let precioProductoUno = 2199;
    let precioProductoDos = 3499;
    let precioProductoTres = 3149;
    let precioProductoCuatro = 1418;
    let precioProductoCinco = 4999;
    let valorCarrito = 0;
    let opcion = prompt('Elegí el número del videojuego que quieras comprar: \n1- Cyberpunk ARS$2199 \n2- A Plague Tale: Requiem ARS$3499 \n3- Temtem ARS$3149 \n4- Slime Rancher ARS$1418 (75% off!) \n5- Spider-Man Remastered ARS$4999 \n6- Pagar. \nEscribí una X en caso de querer cerrar seción.')
    while(opcion!='X'&&opcion!='x'){
        switch(opcion){
            case '1':
                alert('Añadiste Cyberpunk al carrito. Precio a pagar: ARS$' + (valorCarrito + precioProductoUno))
                valorCarrito+=precioProductoUno;
                break;
            case '2':
                alert('Añadiste A Plague Tale: Requiem al carrito. Precio a pagar: ARS$' + (valorCarrito + precioProductoDos))
                valorCarrito+=precioProductoDos
                break;
            case '3':
                alert('Añadiste Temtem al carrito. Precio a pagar: ARS$' + (valorCarrito + precioProductoTres))
                valorCarrito+=precioProductoTres
                break;
            case '4':
                alert('Añadiste Slime Rancher al carrito. Precio a pagar: ARS$' + (valorCarrito + ((precioProductoCuatro*25)/100)))
                valorCarrito+=((precioProductoCuatro*25)/100)
                break;
            case '5':
                alert('Añadiste Spider-Man Remastered al carrito. Precio a pagar: ARS$' + (valorCarrito + precioProductoCinco))
                valorCarrito+=precioProductoCinco
                break;
            case '6':
                let numeroTarjetaSaved = '5555000099994444';
                let vencimientoTarjetaSaved = '530';
                let codigoSeguridadTarjetaSaved = '123';
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