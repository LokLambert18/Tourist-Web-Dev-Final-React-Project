import React from 'react';
import { Link } from 'react-router-dom';

const GuideCardItem = ({ guide }) => {
	return (
		<div className="card">
			<div className="card-body">
				<img
					height={100}
					className="card-img-top"
					src={`/images/stadium.jpg`}
					alt="guide"
				/>

				<Link
					to={`/guide/${guide._id}`}
					className="card-link no-decoration"
				>
					{guide.username}, {guide.city}
				</Link>
			</div>
		</div>
	);
};

export default GuideCardItem;
