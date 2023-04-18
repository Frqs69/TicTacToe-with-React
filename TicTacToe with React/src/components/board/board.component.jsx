import { useState, useEffect } from "react";

import Square from "../square/square.component";

import "./board.style.scss";

function Board() {
	const [squares, setSquare] = useState(Array(9).fill(null));

	const handleClick = (i) => {
		const newSquares = squares.slice();
		newSquares[i] = "X";
		setSquare(newSquares);
	};

	const renderSquare = (i) => {
		return <Square value={squares[i]} onClick={() => handleClick(i)} />;
	};

	const status = "Next player: X";

	return (
		<div>
			<div className='status'>{status}</div>
			<div className='board-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='board-row'>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className='board-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

export default Board;
