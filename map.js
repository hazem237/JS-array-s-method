//The map Function
function myMap(arr, fun) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fun(arr[i]));
    }
    return newArray;
};

//Example of Function that double the number
function double_value(val) {
    val = val * val;
    return val;
};

//The implemntation of the proccess
let arr=[1,2,9];
myMap(arr, double_value);

module.exports=myMap;