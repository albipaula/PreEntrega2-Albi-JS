///////////////// SISTEMA DE RESERVA DE DEPARTAMENTOS ////////////////////////////////

//Declaro clases: Departamentos y Reserva 

class Departamento {
    constructor ( ubicacion,personas, ambientes,precio){
        this.ubicacion = ubicacion ,
        this.personas = personas,
        this.ambientes = ambientes,  
        this.precio = precio
        
    }}

class Reserva {
    constructor (nombre,personas,dias,reservaNumero) {
        this.nombre = nombre,
        this.personas = personas, 
        this.dias = dias ,
        this.reservaNumero= reservaNumero
        
    }
}

//RESERVAS 
const reserva1 = new Reserva ("raul",2,5,35385498) 
const reserva2 = new Reserva ("Paula",3,1,10938455);
const arrayReserva = [reserva1,reserva2] // ARRAY DE LAS RESERVAS

//DEPARTAMENTOS
const cozy1 = new Departamento ( 'coz1',4, 3,1000);// Dep : 4 personas, 3 ambientes
const cozy2 = new Departamento ( 'cozy2',3,2,1000); // Dep : 3 personas , 2 ambientes
const cozy3 = new Departamento ('cozy3',2,1,1000);// Dep: 2 personas, 1 ambiente 
const departamentosOpciones = [cozy1,cozy2,cozy3]; // ARRAY DE LOS DEPARTAMENTOS


//.....DECLARO FUNCIONES.....//

//Función con el menú de opciones. 

function menu() {
    alert("Bienvenido a Cozy Departamentos");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Reservar departamento \n 2) Consultar Reserva \n "));
    return opcion;
}

//FUNCION PARA CONSULTAR RESERVAS POR EL CLIENTE
function consulta(){
    let dni = parseInt( prompt("Ingrese su dni"));

    let consulta = arrayReserva.find (reserva=> reserva.reservaNumero === dni);
        if (dni=== consulta){
            console.log (consulta);
        }else { alert(`lo siento no tenemos reservas con ese dni`) } 

}


// OPCION 1)) EL USUARIO REGISTRA SU RESERVA Y SE LE ASIGNA DEPARTAMENTO SEGUN CANTIDAD DE PERSONAS
function reservaOpciones () {
    let nombre = prompt (` Bienvenido a nuestro sistema de reserva : Ingrese su nombre? `);
    let reservaNumero =parseInt( prompt (`Ingrese su Dni `));
    let personas = parseInt( prompt (`Cuantas personas desean hospedarse? `));
        if (personas > 4 ) { alert (` Lo sentimos, nuestra maxima capacidad es de 4 personas`); menu() };
    let dias = parseInt( prompt (`Cuantas dias desean hospedarse? `));
    let nuevaReserva = new Reserva ( nombre,personas, dias,reservaNumero);
        arrayReserva.push (nuevaReserva); 
        console.log (arrayReserva);
        console.log (`Se registro Reserva para :`);
        console.log (nuevaReserva);
    
    let dptoAsignado = departamentosOpciones.filter (departamento => departamento.personas === personas) ;// metodo para encontrar departamento segun personas indicadas en la reserva 
        console.log ( `Nuestra opcion para ${personas} personas es el siguiente Departamento : `) ;
        console.log (dptoAsignado);

        precioTotal(nuevaReserva.personas );
};



//FUNCION PARA DETERMINAR EL PRECIO SEGUN CANTIDAD DE PERSONAS EN LA RESERVA
function precioTotal(personas){
    const precioNoche = (1000 * personas)  ;
        alert(`el precio a pagar por noche sera  ARS ${precioNoche} `);
    const desc = prompt("Los usuarios del Banco Santander el dia de hoy tiene un 20% de descuento\nUsted opera con Santander?\n(SI/NO)").toLowerCase();
        if(desc === "si"){
        x = precioNoche * 0.2;
        precioFinal = precioNoche - x;
            alert(`el precio a total a pagar por noche sera ARS ${precioFinal} , su reserva fue enviada a email. Gracias por confiar en nosotros!  `); 
        } else if (desc=== "no"){
            alert(`el precio a pagar por noche sera  ARS ${precioNoche} , su reserva fue enviada a email . Gracias por confiar en nosotros! `);
        } else {  alert(`coloco mal la respuesta, volvamos a empezar =)`  ) 
                    reservaOpciones() };
}

// USUARIO INTERACCION -- EJECUTO EL PROGRAMA 

let opcion = menu(); 

switch(opcion) {
    case 1: 
        reservaOpciones();
        break;
    case 2: 
        consulta();
        break;
   
    default: 
        alert("Ingresaste una opcion no valida.   ")
        break;
}




    




 



