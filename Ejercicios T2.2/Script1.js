function separaNumeros(...args) {
    const numerosEnteros = args.filter(arg => Number.isInteger(arg));
    return numerosEnteros;
}

// Pruebas con distintas combinaciones de datos, textos y números
const array1 = separaNumeros(64, 'pie', 33, 'Fernando', 'Alonso');
const array2 = separaNumeros('treinta', 3, 'Campeon', 'Mundo', 40);
const array3 = separaNumeros(66, 'sesenta', 'seis', 6, 66.6);

console.log('Array 1:', array1); 
console.log('Array 2:', array2);
console.log('Array 3:', array3);
