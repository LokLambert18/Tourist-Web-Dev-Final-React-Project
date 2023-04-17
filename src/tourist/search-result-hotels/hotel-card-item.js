import React from 'react';
import { Link } from 'react-router-dom';

const HotelCardItem = ({ hotel }) => {
	return (
		<div className="card">
			<div className="card-body">
				<img
					height={100}
					className="card-img-top"
					src={`/images/stadium.jpg`}
					alt="hotel"
				/>

				<Link
					to={`/hotel/${hotel._id}`}
					className="card-link no-decoration"
				>
					{hotel.name}, {hotel.city}
				</Link>
			</div>
		</div>
	);
};

export default HotelCardItem;
