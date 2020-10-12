// eslint-disable-next-line
import React from "react";

import * as utils from "../../shared/utils/utils";
import styles from "./labyrinth.module.scss";
import Marker from "../../components/marker/marker";
import VisualLabyrinth from "../../components/visualLabyrinth/visualLabyrinth";
import GameControls from "../../components/gameControls/gameControls";
import { Cell } from "../../shared/models/cell";
import constants from "../../shared/constants";

const config = {
  BASE_ROWS: 5,
  BASE_COLS: 5,
  ADITIONAL_MOVEMENTS: 5,
};

let rows = config.BASE_ROWS;
let columns = config.BASE_COLS;
let moves = rows + columns + config.ADITIONAL_MOVEMENTS;
interface State {
  grid: Array<Array<Cell>>;
  x: number;
  y: number;
  movesLeft: number;
  isPlaying: boolean;
  reachedGoal: boolean;
  result: string;
  currentLevel: number;
}

const initialState: State = {
  grid: Array<Array<Cell>>(),
  x: 0,
  y: 0,
  movesLeft: moves,
  isPlaying: true,
  reachedGoal: false,
  result: "",
  currentLevel: 1,
};

class Labyrinth extends React.Component {
  state: State = initialState;

  handleKey = (event: KeyboardEvent) => {
    const { x, y } = this.state;
    switch (event.code) {
      case "ArrowUp":
        if (this.canMove(x - 1, y)) {
          this.move(-1, 0);
        }
        break;
      case "ArrowDown":
        if (this.canMove(x + 1, y)) {
          this.move(1, 0);
        }
        break;
      case "ArrowLeft":
        if (this.canMove(x, y - 1)) {
          this.move(0, -1);
        }
        break;
      case "ArrowRight":
        if (this.canMove(x, y + 1)) {
          this.move(0, 1);
        }
        break;
      case "KeyR":
        !this.state.isPlaying && this.handleRestartLevel();
        break;
      case "KeyN":
        !this.state.isPlaying && this.handleNextLevel();
        break;
      case "KeyQ":
        !this.state.isPlaying && this.handleRestartGame();
        break;
      default:
        break;
    }
  };

  componentDidMount(): void {
    document.addEventListener("keydown", this.handleKey);
    const g = utils.getBaseGrid(rows, columns);
    utils.generateWalls(g);
    this.setState({ grid: g });
  }

  canMove = (x: number, y: number): boolean => {
    const { movesLeft, reachedGoal, grid } = this.state;
    return (
      movesLeft > 0 && !reachedGoal && grid[x] && grid[y] && !grid[x][y].isWall
    );
  };

  setStateIsPlayerHere = (isHere: boolean): void => {
    this.setState((prevState: State) =>
      prevState.grid.map((row, i) =>
        row.map((col, j) =>
          i === prevState.x && j === prevState.y
            ? (col.isPlayerHere = isHere)
            : col
        )
      )
    );
  };

  move = (x: number, y: number): void => {
    this.setStateIsPlayerHere(false);
    this.setState((prevState: State) => ({
      x: prevState.x + x,
      y: prevState.y + y,
      movesLeft: prevState.movesLeft - 1,
    }));
    this.setStateIsPlayerHere(true);
    this.updateStatus();
  };

  updateStatus = (): void => {
    if (this.state.grid[this.state.x][this.state.y].isFinish) {
      this.setState({ reachedGoal: true, isPlaying: false });
    }
    if (!this.state.movesLeft) {
      this.setState({ isPlaying: false });
    }
  };

  // right now we're allowing the user to go to the next level
  // even if he/she didn't win.
  handleNextLevel = (): void => {
    columns++;
    rows++;
    moves = rows * 2 + 2 + this.state.currentLevel;
    this.setState((prevState: State) => ({
      ...initialState,
      movesLeft: moves,
      currentLevel: prevState.currentLevel + 1,
    }));
    this.createLabyrinthGrid();
    // it positions the scroll at the initial player position.
    // we're not preventing default since we need the scroll to move
    // along with the player.
    window.scrollTo(0, 0);
  };

  handleRestartGame = (): void => {
    rows = config.BASE_ROWS;
    columns = config.BASE_COLS;
    this.setState(initialState);
    this.createLabyrinthGrid();
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }

  handleRestartLevel = (): void => {
    this.resetPlayerInGrid();
    this.setState((prevState: State) => ({
      ...initialState,
      grid: prevState.grid,
      currentLevel: prevState.currentLevel,
    }));
  };

  createLabyrinthGrid(): void {
    const g = utils.getBaseGrid(rows, columns);
    utils.generateWalls(g);
    this.setState({ grid: g });
  }

  resetPlayerInGrid(): void {
    this.setState((prevState: State) =>
      prevState.grid.map((row, i) =>
        row.map((col, j) =>
          i === 0 && j === 0
            ? (col.isPlayerHere = true)
            : (col.isPlayerHere = false)
        )
      )
    );
  }

  render(): JSX.Element {
    return (
      <>
        <div className={styles.Level}>
          {constants.LEVEL} {this.state.currentLevel}
        </div>
        <div className={styles.Container} data-testid="visual-labyrinth">
          <VisualLabyrinth matrix={this.state.grid} />
        </div>
        <div data-testid="marker">
          <Marker
            movesLeft={this.state.movesLeft}
            success={this.state.reachedGoal}
            showResult={!this.state.isPlaying}
          />
        </div>
        <GameControls
          isPlaying={this.state.isPlaying}
          onNextLevel={this.handleNextLevel}
          onRestartGame={this.handleRestartGame}
          onRestartLevel={this.handleRestartLevel}
        />
      </>
    );
  }
}
export default Labyrinth;
