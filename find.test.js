
const { hasUncaughtExceptionCaptureCallback } = require('process');
const myFind = require('./find');

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

test("test find method", () => {
    expect(myFind(users, finder)).toBe(users.find((obj) => obj.id == 1));
})