import Card from "./Card";

function Tours({ tours, removeTour }) {
	return (
		<div className="Tours">
			<div>
				<h1 className="title">PLAN WITH DEV</h1>
			</div>
			<div className="cards">
				{tours.map((tour) => {
					return (
						<Card
							key={tour.id}
							{...tour}
							removeTour={removeTour}
						></Card>
					);
				})}
			</div>
		</div>
	);
}

export default Tours;
