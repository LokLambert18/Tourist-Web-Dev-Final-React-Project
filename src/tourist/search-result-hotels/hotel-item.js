import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HotelItem = ({ hotel }) => {
	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img
						height={40}
						width={40}
						className="rounded-circle"
						src={`/images/tourist/hotel.png`}
						alt="hotel"
					/>
				</div>
				<div className="col-8">
					<Link
						to={`/hotel/${hotel._id}`}
						className="location-name no-decoration"
						style={{ textDecoration: 'none' }}
					>
						{hotel.name},
						<span className="text-gray"> {hotel.city}</span>
					</Link>
					{/* <div>{review.text}</div> */}
				</div>
			</div>
		</li>
	);
};

export default HotelItem;
