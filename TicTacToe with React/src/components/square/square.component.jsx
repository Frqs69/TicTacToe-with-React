import { useState } from "react";

import "./square.style.scss";

function Square({ value, onClick }) {
	return (
		<button className='square' onClick={onClick}>
			{value}
		</button>
	);
}

export default Square;
