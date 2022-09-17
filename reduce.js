//The reduce Function
function myReduce(arr, fun, initial_val) {


    for (let i = 0; i < arr.length; i++) {

        initial_val = fun(initial_val, arr[i]);
    }
    return initial_val;
};

//Function that sum all the array index
function reducer(initial_val, val) {
    return initial_val + val;
}
//implementation of the proccess
let arr = [1, 2, 3, 4, 5];
myReduce(arr, reducer, 0); // 15 