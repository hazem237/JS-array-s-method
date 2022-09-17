// find function 
function myFind(arr, fun) {
    let desired_result;
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            desired_result = arr[i];
            break;
        }
    }
    return desired_result;
};

//Example of function that find the user who his id =1
function finder(obj) {
    if (obj.id == 1)
        return true;

    return false;
};

//The implementation of the proccess
let users = [
    { id: 1, name: "Hazem" },
    { id: 2, name: "Osid" },
    { id: 3, name: "Mary" }
];
let user = myFind(users, finder);
if (user)
    console.log(user.name); //Hazem