import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({ review }) => {
	// const {users} = useSelector((state) => state.login);

	// const user = users.find((user) => user._id === review.authorId)
	// console.log(user)

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
						to={`/profile/${review.authorId}`}
						className="location-name no-decoration"
					>
						{review.firstName} {review.lastName}
						<span className="text-gray"> @{review.username}</span>
					</Link>

					<div>{review.text}</div>
				</div>
			</div>
		</li>
	);
};

export default ReviewItem;
