const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

//---------------------------------------------------------------
// ACCEDER A UN OBJETO

//Notación de punto
console.log(gato.nombre)
console.log(gato.duerme)
console.log(gato.enemigos[0]);

// Notación de corchetes
console.log(gato['nombre'])
console.log(gato['edad'])
console.log(gato["enemigos"][0]);

//---------------------------------------------------------------
// CRUD

// Create
gato.color = 'White'
gato['vidas'] = 7

// Read
console.log(gato)

//Update
gato.color = 'Black'
gato['vidas'] = 6

// Delete 
delete gato.color
delete gato['vidas']


//---------------------------------------------------------------
//hasOwnProperty comprueba si una propiedad existe: retorna true o false
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

console.log(gato.hasOwnProperty("nombre")) // output true
console.log(gato.hasOwnProperty("salud")) // output false