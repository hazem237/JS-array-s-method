// The Filter Function 
function myFilter(arr, fun) {
    let newArray = [];

    arr.forEach((val) => {
        if (fun(val))
            newArray.push(val);
    })

    return newArray;
}

//Exmaple of Function that check if the value is falsy value or not
function falsy_remover(val) {
    if (Boolean(val))
        return true;

    return false;
}

//implementation for the process 
let arr = [1, 0, undefined, 4, 5, "", null];
myFilter(arr, falsy_remover);

module.exports=myFilter;
