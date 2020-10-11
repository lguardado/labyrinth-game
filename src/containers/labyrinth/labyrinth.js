import React from 'react';

import * as utils from '../../shared/utils/utils';
import styles from './labyrinth.module.scss';
import Marker from '../../components/marker/marker';
import VisualLabyrinth from '../../components/visualLabyrinth/visualLabyrinth';
import Button from '../../components/button/button';

const rows = 10;
const columns = 10;
const moves = rows + columns + 5;

class Labyrinth extends React.Component {

    state = {
        grid: [],
        x: 0,
        y: 0,
        movesLeft: moves,
        isPlaying: true,
        reachedGoal: false,
        result: '',
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    if (this.canMove(this.state.x - 1, this.state.y)) {
                        this.move(-1, 0);
                    }
                    break;
                case 'ArrowDown':
                    if (this.canMove(this.state.x + 1, this.state.y)) {
                        this.move(1, 0);
                    }
                    break;
                case 'ArrowLeft':
                    if (this.canMove(this.state.x, this.state.y - 1)) {
                        this.move(0, -1);

                    }
                    break;
                case 'ArrowRight':
                    if (this.canMove(this.state.x, this.state.y + 1)) {
                        this.move(0, 1);
                    }
                    break;
                default:
                    break;
            }
        })
        let g = utils.getMatrix(rows, columns);
        utils.generateWalls(g);
        this.setState({ grid: g });
    }

    canMove = (x, y) => {
        return this.state.movesLeft > 0 &&
            !this.state.reachedGoal &&
            this.state.grid[x] &&
            this.state.grid[y] &&
            !this.state.grid[x][y].isDisabled
    }

    setStateIsPlayerHere = (isHere) => {
        this.setState(prevState => {
            return prevState.grid.map(
                (row, i) => (
                    row.map((col, j) => (
                        i === this.state.x &&
                            j === this.state.y ?
                            col.isPlayerHere = isHere :
                            col))))
        });
    }

    move = (x, y) => {
        this.setStateIsPlayerHere(false);
        this.setState((prevState) => { return { x: prevState.x + x, y: prevState.y + y, movesLeft: prevState.movesLeft - 1 } });
        this.setStateIsPlayerHere(true);
        this.updateStatus();
    }

    updateStatus = () => {
        if (this.state.grid[this.state.x][this.state.y].isFinish) {
            this.setState({ reachedGoal: true, isPlaying: false });
        }
        if (!this.state.movesLeft) {
            this.setState({isPlaying: false});
        }
    }

    render() {
        return <React.Fragment>
            <div className={styles.Container}>
                <VisualLabyrinth matrix={this.state.grid} />
            </div>
            <div>
                <Marker
                    movesLeft={this.state.movesLeft}
                    success={this.state.reachedGoal}
                    showResult={!this.state.isPlaying} />
            </div>
            <div className={styles.NewGameButtons}>

                {!this.state.isPlaying && <React.Fragment>
                    <Button text={'Next level'} />
                    <Button text={'Restart current level'} />
                </React.Fragment>}
            </div>
        </React.Fragment>
    }
}
export default Labyrinth;

