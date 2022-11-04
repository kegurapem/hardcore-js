const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    mostrarEnemigos() {
        return this.enemigos.forEach((item) => console.log(item));
    },
};

const {comer: {nombre}} = gato;
console.log(comer("pez"));

// undefined está comiendo pez