import { Cell } from "../models/cell";
import * as Utils from "../utils/utils";
import mockMatrix from "../mocks/mockMatrix";

const columns = 2;
const rows = 5;
let arr: Array<Array<Cell>> = [];

beforeAll(() => {
  arr = Utils.getBaseGrid(columns, rows);
});

test("Function getBaseGrid returns the correct data", () => {
  expect(arr.length).toBe(columns);
  expect(arr[0].length).toBe(rows);
});

test("it should generate some walls in a grid passed to it", () => {
  Utils.generateWalls(mockMatrix);
  let walls = 0;
  let paths = 0;
  for (let i = 0; i < mockMatrix.length; i++) {
    for (let j = 0; j < mockMatrix[0].length; j++) {
      if (mockMatrix[i][j].isWall) {
        walls++;
      } else {
        paths++;
      }
    }
  }
  expect(mockMatrix[0][0].isPlayerHere).toBeTruthy();
  expect(walls).toBeGreaterThan(1);
  expect(paths).toBeGreaterThan(1);
});
