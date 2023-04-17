import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { findUserByIdThunk } from '../thunks/login-thunk';


const FollowerItem = ({ user }) => {

	const dispatch = useDispatch();
	const clickHandler = () => {
		console.log('User');
		console.log(user.fromId);
		dispatch(findUserByIdThunk(user.fromId));
		
	};

	console.log(user);
	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-4">
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
						to={`/profile/${user.fromId}`}
						style={{ textDecoration: 'none' }}
						onClick={clickHandler}
					>
						{user.fromFname} {user.fromLname}
						{/* <div className="text-gray"> @{user.username}</div> */}
					</Link>
					{/* <div>{review.text}</div> */}
				</div>
			</div>
		</li>
	);
}; 

export default FollowerItem;
