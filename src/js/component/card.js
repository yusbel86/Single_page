import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(prop) {
	return (
		<div className="card container">
			<div className="card-header">{prop.dir}</div>
			<div className="card-body">
				<h5 className="card-title">{prop.title}</h5>
				<p className="card-text">{prop.des}</p>
				<a href="#" className="btn btn-primary">
					Whach
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	dir: PropTypes.string,
	des: PropTypes.string
};
