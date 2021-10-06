let arr = [5, 3, 8, 1, 20, 50, 4];
let names = ["Hare", "Kristina", "Hare", "Kristina", "Kristina", "Kristina", "Hare", "Hare", ";)"];
// Ejercicio 5
console.log("EJ 5: elementos coincidentes según rango: " + filterRange(arr, 1, 4));
console.log("EJ 5: array original " + arr);
//
// Ejercicio 6
console.log("EJ 6: array ordenado de forma descendiente: " + shortInvertByBubble(arr));
//
// Ejercicio 7
console.log("EJ 7: array orden aleatorio: " + randomize(arr, 20));
//
// Ejercicio 8
console.log("EJ 8: elementos sin repetir: " + selectUniqueItems(names));
// retorna ordenado de forma descendiente
function shortInvertByBubble(array) {
    let arrayCopy = [...array];
    let aux = 0;
    let N = arrayCopy.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            if (arrayCopy[i] < arrayCopy[j]) {
                aux = arrayCopy[i];
                arrayCopy[i] = arrayCopy[j];
                arrayCopy[j] = aux;
            }
        }
    }
    return arrayCopy; // shortByBubble(array).reverse() == array.sort().reverse()
}
function setRange(minValue, maxValue) {
    let range = [];
    for (let i = minValue; i <= maxValue; i++) {
        range.push(i);
    }
    return range;
}
// Comprobando si un valor existe en un rango
function filterRange(valueList, a, b) {
    let valueRange; //
    let filteredValue = [];
    a = [a, b].sort()[0];
    b = [a, b].sort()[1];
    valueRange = setRange(a, b);
    for (let value of valueList) {
        if (valueRange.includes(value)) {
            filteredValue.push(value);
        }
    }
    return filteredValue;
}
function randomValue(seed) {
    return Math.floor(Math.random() * seed);
}
// usando intercambios entre pares aleatorios
function randomize(vec, seed = 0) {
    let swapped = [...vec];
    let maxNum = vec.length;
    seed = seed + maxNum;
    let choose = [0, 0];
    for (let i = 0; i < seed; i++) {
        choose[0] = randomValue(maxNum);
        choose[1] = randomValue(maxNum);
        while (choose[0] === choose[1]) {
            choose[0] = randomValue(maxNum);
            choose[1] = randomValue(maxNum);
        }
        // intercambiar par
        [swapped[choose[0]], swapped[choose[1]]] = [swapped[choose[1]], swapped[choose[0]]];
    }
    return swapped;
}
function selectUniqueItems(wordList) {
    let registro = [];
    for (let word of wordList) {
        if (registro.indexOf(word) === -1) {
            registro.push(word);
        }
    }
    return registro;
}
//# sourceMappingURL=app.js.map