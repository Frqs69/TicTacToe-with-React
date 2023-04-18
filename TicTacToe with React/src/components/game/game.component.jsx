import { useState } from "react";

import Board from "../board/board.component";

import { calculateWinner } from "../../utils/calculateWinner";

import "./game.style.scss";

const Game = () => {
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setX] = useState(true);

	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);
	const isDraw = !winner && current.squares.every((square) => square);

	const handleClick = (i) => {
		// create copy of squares board
		const newHistory = history.slice(0, stepNumber + 1);
		const newSquares = current.squares.slice();

		//check if it is winner or board has been filled
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}

		//change turn for next player
		newSquares[i] = xIsNext ? "X" : "O";

		setHistory(newHistory.concat([{ squares: newSquares }]));
		setStepNumber(newHistory.length);
		//change state for next player
		setX((prevState) => !prevState);
	};

	const jumpTo = (move) => {
		setStepNumber(move);
	};

	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else if (isDraw) {
		status = "Draw";
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	const moves = history.map((step, move) => {
		const desc = move ? "Go to move #" + move : "Go to game start";
		return (
			<li key={step}>
				{" "}
				<button onClick={() => jumpTo(move)}>{desc}</button>{" "}
			</li>
		);
	});

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={current.squares} onClick={handleClick} />
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

export default Game;
