// Equipos de Entrenadores
const entrenadores = [
    {
        nombre: "Entrenador 1",
        equipo: [
            { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
            { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
            { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
            { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
            { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
            { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 2",
        equipo: [
            { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
            { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
            { nombre: "Meganium", nivel: 33, tipo: "Planta" },
            { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
            { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
            { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 3",
        equipo: [
            { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
            { nombre: "Swampert", nivel: 37, tipo: "Agua" },
            { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
            { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
            { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
            { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 4",
        equipo: [
            { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
            { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
            { nombre: "Torterra", nivel: 44, tipo: "Planta" },
            { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
            { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
            { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 5",
        equipo: [
            { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
            { nombre: "Samurott", nivel: 49, tipo: "Agua" },
            { nombre: "Serperior", nivel: 50, tipo: "Planta" },
            { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
            { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
            { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
        ]
    }
];

// Desafío 1: Pokémon con Mayor y Menor Nivel
function pokemonMayorMenorNivel(entrenadores) {
    let pokemonMayor = null;
    let pokemonMenor = null;

    entrenadores.forEach(entrenador => {
        entrenador.equipo.forEach(pokemon => {
            if (!pokemonMayor || pokemon.nivel > pokemonMayor.nivel) {
                pokemonMayor = pokemon;
            }
            if (!pokemonMenor || pokemon.nivel < pokemonMenor.nivel) {
                pokemonMenor = pokemon;
            }
        });
    });

    return { pokemonMayor, pokemonMenor };
}

// Llamada a la función del Desafío 1
console.log(pokemonMayorMenorNivel(entrenadores));


// Desafío 2: Buscador
function buscarPokemon(entrenadores, nombreBuscado) {
    let resultados = [];

    entrenadores.forEach(entrenador => {
        entrenador.equipo.forEach(pokemon => {
            if (pokemon.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())) {
                resultados.push(pokemon);
            }
        });
    });

    return resultados;
}

// Llamada a la función del Desafío 2
console.log(buscarPokemon(entrenadores, "Char")); 


// Desafío 3: Tipo con Promedio de Nivel Más Alto
function tipoConMayorPromedioNivel(entrenadores) {
    let nivelesPorTipo = {};
    let conteoPorTipo = {};

    entrenadores.forEach(entrenador => {
        entrenador.equipo.forEach(pokemon => {
            if (!nivelesPorTipo[pokemon.tipo]) {
                nivelesPorTipo[pokemon.tipo] = 0;
                conteoPorTipo[pokemon.tipo] = 0;
            }
            nivelesPorTipo[pokemon.tipo] += pokemon.nivel;
            conteoPorTipo[pokemon.tipo]++;
        });
    });

    let mayorPromedio = -1;
    let tipoConMayorPromedio = null;

    for (let tipo in nivelesPorTipo) {
        let promedio = nivelesPorTipo[tipo] / conteoPorTipo[tipo];
        if (promedio > mayorPromedio) {
            mayorPromedio = promedio;
            tipoConMayorPromedio = tipo;
        }
    }

    return tipoConMayorPromedio;
}

// Llamada a la función del Desafío 3
console.log(tipoConMayorPromedioNivel(entrenadores));