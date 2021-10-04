let arr = [5, 3, 1, 23, 654, 8, 43];
let names = ["Hare", "Kristina", "Hare", "Kristina", "Kristina", "Kristina", "Hare", "Hare", ";)"];
// Ejercicio 5
console.log("EJ 5: array ordenado: " + filterRange(arr, 1, 4));
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
function shortByBubble(array) {
    let aux = 0;
    let N = array.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            if (array[i] > array[j]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array; // array.sort()
}
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
function filterRange(array, a, b) {
    let shortedArr = shortByBubble(array);
    let aIndex = shortedArr.indexOf(a);
    let bIndex = shortedArr.indexOf(b);
    return shortedArr.slice(aIndex, bIndex - 1);
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