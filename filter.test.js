
const myFilter = require('./filter');

function falsy_remover(val) {
    if (Boolean(val))
        return true;

    return false;
}
let arr = [1, 0, undefined, 4, 5, "", null];

test('Test my fillter method', () => {
    expect(myFilter(arr, falsy_remover)).toEqual(arr.filter(num => num > 0));
})