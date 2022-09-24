
const myMap = require('./map');

//the function example
function double_value(val) {
    val = val * val;
    return val;
};

//The implemntation of the proccess
let arr = [1, 2, 9];

test("Test my own created map method", () => {
    expect(myMap(arr, double_value)).toEqual(arr.map((val) => {
        return val * val;
    }))
})