import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
//create your first component
export function Home() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/films/")
			.then(Response => Response.json())
			.then(data => {
				console.log(data.results);
				setPeople(data.results);
			});
	}, []);

	return (
		<div className="text-center">
			{people.map((item, index) => {
				return (
					<Card
						key={index}
						title={item.title}
						dir={item.director}
						des={item.opening_crawl}
					/>
				);
			})}
		</div>
	);
}
