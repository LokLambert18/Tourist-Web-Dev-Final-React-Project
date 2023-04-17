import React from 'react';
import { Link } from 'react-router-dom';

const RequestItem = ({ request }) => {
	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img
						height={40}
						width={40}
						className="rounded-circle"
						src={`/images/tourist/user.png`}
						alt="user"
					/>
				</div>
				<div className="col-10">
					<Link
						to={`/profile/${request.fromId}`}
						className="location-name no-decoration"
					>
						{request.fromFname} {request.fromLname}
						{/* <span className="text-gray"> @{request.username}</span> */}
					</Link>

					<div>{request.fromPhone}</div>
					<div>{request.fromEmail}</div>
				</div>
			</div>
		</li>
	);
};

export default RequestItem;
