import { Cell } from "../models/cell";

export const getMatrix = (
  columns: number,
  rows: number
): Array<Array<Cell>> => {
  const array: Array<Array<Cell>> = new Array(columns);
  for (let i = 0; i < columns; i++) {
    array[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      array[i][j] = {
        isPlayerHere: false,
        isStart: false,
        isWall: true,
        isFinish: false,
        x: i,
        y: j,
      };
    }
  }
  return array;
};

export const generateWalls = (arr: Array<Array<Cell>>): void => {
  // todo: receive this coords as params to set the initial block for the game.
  let current = arr[0][0];
  current.isStart = true;
  current.isWall = false;
  current.isPlayerHere = true;

  function getNeighbour(cell: Cell): Cell | undefined {
    const neighbours: Array<Cell> = [];
    const top = arr[cell.x - 1] && arr[cell.x - 1][cell.y];
    const right = arr[cell.x] && arr[cell.x][cell.y + 1];
    const bottom = arr[cell.x + 1] && arr[cell.x + 1][cell.y];
    const left = arr[cell.x - 1] && arr[cell.x - 1][cell.y];
    top && top.isWall && neighbours.push(top);
    right && right.isWall && neighbours.push(right);
    bottom && bottom.isWall && neighbours.push(bottom);
    left && left.isWall && neighbours.push(left);
    if (!neighbours.length) {
      current.isFinish = true;
      return;
    }
    const neighbour = neighbours[Math.floor(Math.random() * neighbours.length)];
    return neighbour;
  }

  function block(i: number, j: number): void {
    // tslint:disable-line
    const next = getNeighbour(current);
    if (next) {
      next.isWall = false;
      current = next;
    } else {
      return;
    }
    block(current.x, current.y);
  }
  block(0, 0);
};
