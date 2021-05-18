console.table(countries);
//task 1
function getInfoCounties(arr, [field1, field2, field3]) {
    let info = arr.map(function (country) {
        return { [field1]: country[field1], [field2]: country[field2], [field3]: country[field3] };
    })
    return info;
}
let arr = prompt('input 3 fields:');
arr = arr.split(',');
console.table(getInfoCounties(countries, arr));

//task 2
function getSortData(arr, str) {
    let sorted = arr.sort(function (countryA, countryB) {
        if (typeof (countryA[str]) == "string") {
            return countryA[str] - countryB[str];
        } else if (typeof (countryA[str]) == "number") {
            return countryB[str] - countryA[str];
        }
    })
    return sorted;
}
let field = prompt('input field for sort');
console.table(getSortData(countries, field));

//task 3
function getAvarage(arr, str) {
    let count = 0;
    let sum = arr.reduce(function (acc, el) {
        if (typeof (el[str]) == "number" && !isNaN(el[str])) {
            count++;
            return acc + el[str];
        }
      
    }, 0)
    return (sum / count).toFixed(2);
}

let average = prompt('input field')
console.log(average + ": " + getAvarage(countries, average));
// Выбивает NaN, если в объекте есть хоть одно нечисловое значение, не смог решить даную проблему
