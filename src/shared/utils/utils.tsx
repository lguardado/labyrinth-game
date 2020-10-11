export const getMatrix = (columns: number, rows: number) => {
    const array: any = new Array(columns);
    for (let i = 0; i < columns; i++) {
        array[i] = new Array(rows);
        for (let j = 0; j < rows; j++) {
            array[i][j] = { isPlayerHere: false, isStart: false, isDisabled: true, isFinish: false, x: i, y: j }
        }
    }
    return array;
}

export const generateWalls = function (arr: any) {
    // todo: receive this coords as params to set the initial block for the game.
    let current = arr[0][0];
    current.isStart = true;
    current.isVisited = true;
    current.isDisabled = false;
    current.isPlayerHere = true;
    block(0, 0);
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         block(i, j);
    //     }
    // }

    function block(i: number, j: number) {
        let next = getNeighbours(current);
        if (next) {
            next.isDisabled = false;
            current = next;
        } else {
            return;
        }
        block(current.x, current.y);
    }

    function getNeighbours(block: any) {
        let neighbours: any = [];
        const top = arr[block.x - 1] && arr[block.x - 1][block.y];
        const right = arr[block.x] && arr[block.x][block.y + 1];
        const bottom = arr[block.x + 1] && arr[block.x + 1][block.y];
        const left = arr[block.x - 1] && arr[block.x - 1][block.y];
        top && top.isDisabled && neighbours.push(top);
        right && right.isDisabled && neighbours.push(right);
        bottom && bottom.isDisabled && neighbours.push(bottom);
        left && left.isDisabled && neighbours.push(left);
        if (!neighbours.length) {
            current.isFinish = true;
            return;
        }
        const neighbour = neighbours[Math.floor(Math.random() * neighbours.length)];
        return neighbour;
    }
}



