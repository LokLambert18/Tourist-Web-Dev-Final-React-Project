import React from 'react';
import { useSelector } from 'react-redux';

const ReviewSummaryItem = ({ review }) => {
	const {users} = useSelector((state) => state.login);

	// tuits.findIndex((t) => t._id === payload._id)
	const user = users.find((user) => user._id === review.authorId)
	// console.log(user)

	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img
						height={40}
						width={40}
						className="rounded-circle"
						src={`/images/stadium.jpg`}
					/>
				</div>
				<div className="col-10">
					<a
						className="location-name no-decoration"
						href="#"
					>
						{user.username}
					</a>
					{/* <span> . {review.locId}</span> */}
					<div>{review.text}</div>
				</div>
			</div>
		</li>
	);
};

export default ReviewSummaryItem;
