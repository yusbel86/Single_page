import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/people")
			.then(Response => Response.json())
			.then(data => {
				console.log(data.results);
				setPeople(data.results);
			});
	}, []);

	return (
		<div className="text-center">
			{people.map((item, index) => {
				return <div key={index}>{item.count}</div>;
			})}
		</div>
	);
}
