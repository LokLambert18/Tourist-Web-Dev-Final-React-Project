import React from 'react';
import { Link } from 'react-router-dom';

const ReviewSummaryItem = ({ review }) => {
	// const {users} = useSelector((state) => state.login);

	// const user = users.find((user) => user._id === review.authorId)
	// console.log(user)

	console.log(review.type);

	return (
		<>
			{review.type === 1 && (
				<li className="list-group-item">
					<div className="row">
						<div className="col-2">
							<img
								height={40}
								width={40}
								className="rounded-circle"
								src={`/images/tourist/location.svg`}
								alt="user"
							/>
						</div>
						<div className="col-10">
							<Link
								to={`/location/${review.locId}`}
								className="location-name no-decoration"
							>
								{review.locName}, {review.locCity}
								{/* <span className="text-gray"> @{review.username}</span> */}
							</Link>
							<div>{review.text}</div>
						</div>
					</div>
				</li>
			)}

			{review.type === 2 && (
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
								to={`/guide/${review.guideId._id}`}
								className="location-name no-decoration"
							>
								{review.guideId.firstName} {review.guideId.lastName}, {review.guideId.city}
								{/* <span className="text-gray"> @{review.username}</span> */}
							</Link>
							<div>{review.text}</div>
						</div>
					</div>
				</li>
			)}

			{review.type === 3 && (
				<li className="list-group-item">
					<div className="row">
						<div className="col-2">
							<img
								height={40}
								width={40}
								className="rounded-circle"
								src={`/images/tourist/hotel.png`}
								alt="user"
							/>
						</div>
						<div className="col-10">
							<Link
								to={`/hotel/${review.hotelId._id}`}
								className="location-name no-decoration"
							>
								{review.hotelId.name}, {review.hotelId.city}
								{/* <span className="text-gray"> @{review.username}</span> */}
							</Link>
							<div>{review.text}</div>
						</div>
					</div>
				</li>
			)}
		</>
	);
};

export default ReviewSummaryItem;
