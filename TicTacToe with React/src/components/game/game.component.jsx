import Board from "../board/board.component";

import "./game.style.scss";

const Game = () => {
	return (
		<div className='game'>
			<div className='game-board'>
				Test
				<Board />
			</div>
			<div className='game-info'>
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
};

export default Game;
