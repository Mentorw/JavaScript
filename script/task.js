alert('task 1');
function getArrSum(array) {
    var summ = 0;
    for (var item of array) {
        summ += item;
    }
    return summ;
}
var arr_number = [], length_arr_number;
length_arr_number = prompt('Input lenght of array');
for (var i = 0; i < length_arr_number; i++) {
    arr_number[i] = prompt('input element');
    arr_number[i] = +arr_number[i];

}
console.log(arr_number);

alert('Summ = ' + getArrSum(arr_number));
alert('task 2');
function getWordsLength(string) {
    var count = 0;
    var el_string = string.split(' ');
    for (var el of el_string) {
        count++;
    }
    return count;
}
var str = prompt('input string');
alert('Number of words = ' + getWordsLength(str));
alert('task 3');
function getReversedStr(string) {
    var revers = string.split('');
    revers = revers.reverse('').join('');
    return revers;
}
var str_for_reverse = prompt('input string for reverse');
alert(getReversedStr(str_for_reverse));
alert('Task 4');
function getMostPopSymbol(string) {
    string = string.split('');
    var pop = "1";
    var counter = 1;
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        pop = string[i];
        
        for (var j = i; j<string.length; j++){
            if(pop === string[j]){
                count++;
            }
            if(counter < count){
                counter = count;
                pop = string[i]
            }
            else if(counter === count){
                pop = string[0];
            }
        }
        count = 0;
    }
    console.log(pop);
    return pop;
}
var string = prompt('input string');
alert('most popular symbol: ' + getMostPopSymbol(string));
