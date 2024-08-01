import { useState } from "react";

function Card({ id, image, info, name, price,  removeTour }) {
	const [readMore, setReadMore] = useState(false);

	const description = readMore ? info : `${info.substring(0, 200)}....`;

	const readMoreHandler = (event) => {
		setReadMore(!readMore);
	};

	return (
		<div className="card">
			<img alt="" src={image} className="image" />
			<div className="cardDesc">
				<div className="tourDetails">
					<h4 className="tourPrice">₹ {price}</h4>
					<h4 className="tourName">{name}</h4>
				</div>

				<div className="tourDecs">
					{description}

					<span className="readMore" onClick={readMoreHandler}>
						{readMore ? `Show Less` : `Read More`}
					</span>
				</div>
			</div>
			<button
				className="notIntButton"
				onClick={() => {
					removeTour(id);
				}}
			>
				Not Interested
			</button>
		</div>
	);
}

export default Card;
