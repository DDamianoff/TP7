// noinspection JSUnusedGlobalSymbols
let arr = [5, 3, 1, 23, 654, 8, 43];
let names = ["Hare", "Kristina", "Hare", "Kristina", "Kristina", "Kristina", "Hare", "Hare", ";)"];
// Ejercicio 5
// console.log("array ordenado: "+filterRange(arr,1,4));
// console.log("array original "+arr);
//
// Ejercicio 6
// console.log("array ordenado de forma descendiente: "+shortInvertByBubble(arr));
//
// Ejercicio 7
// console.log("array orden aleatorio: "+randomize(arr,20));
//
// Ejercicio 8
console.log("elementos sin repetir: " + selectUniqueItems(names));
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
function countRepeatedValue(word) {
    let counter = {};
    let i = 0;
    for (let e of word) {
        if (e in counter) {
            counter[e].push(i);
        }
        else {
            counter[e] = [i];
        }
        i++;
    }
    return counter;
}
function selectUniqueItems(textList) {
    return Object.keys(countRepeatedValue(textList));
}
/*
Producto a medias de una mala interpretación de la consigna.
(elimina todos los elementos repetidos)

// expresará el objeto como array de arrays
// y usará o descartará sus valores en función de
// la cantidad de valores de los array hijos.
function compactRepeatedValues (valueList: {[key: string]: number[]}) {
    let repeatedValues:number[] = [];
    // @ts-ignore
    let valueListArray: number[][] = Object.values(valueList);

    for (let array of valueListArray) {
        if (array.length > 1) {
            repeatedValues = repeatedValues.concat(array);
        }
    }
    return repeatedValues
}

function selectUniqueItems (wordList:string[]) {
    let ListDict: {[key: string]: number[]} = countRepeatedValue(wordList);
    let repeatedIndex: number[] = compactRepeatedValues(ListDict);
    // una linea: let repeatedIndex: number[] = compactRepeatedValues(countRepeatedValue(wordList));

    let poppedWordList:string[] = [...wordList];
    for (let i = 0; i < repeatedIndex.length; i++) {
        poppedWordList.splice(repeatedIndex[i],1);
    }
    return poppedWordList
}
*/
// noinspection JSUnusedGlobalSymbols
//# sourceMappingURL=app.js.map