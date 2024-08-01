import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./components/Tours";

const App = () => {
	const [tours, setTours] = useState(data);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	if (tours.length === 0) {
		return (
			<div className="refresh">
				<h2>No Tours Left</h2>

				<button className="refreshButton" onClick={() => setTours(data)}>Refresh</button>
			</div>
		);
	}

	return (
		<div className="App">
			<Tours tours={tours} removeTour={removeTour}></Tours>
		</div>
	);
};

export default App;