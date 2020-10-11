import * as Utils from './utils';

let columns = 2;
let rows = 5;
let arr: any = [];

beforeAll(() => {
    arr = Utils.getMatrix(columns, rows);
})

test('Function getMatrix returns the correct data', () => {
    expect(arr.length).toBe(columns);
    expect(arr[0].length).toBe(rows);
});
