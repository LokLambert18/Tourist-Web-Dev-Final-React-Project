import React from 'react';
import { Link } from 'react-router-dom';

const GuideItem = ({ guide }) => {
	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img
						height={40}
						width={40}
						className="rounded-circle"
						src={`/images/tourist/user.png`}
						alt="hotel"
					/>
				</div>
				<div className="col-8">
					<Link
						to={`/guide/${guide._id}`}
						className="location-name no-decoration"
						style={{ textDecoration: 'none' }}
					>
						{guide.firstName} {guide.lastName}
						<div className="text-gray"> @{guide.username}</div>
					</Link>
					{/* <div>{review.text}</div> */}
				</div>
			</div>
		</li>
	);
};

export default GuideItem;
