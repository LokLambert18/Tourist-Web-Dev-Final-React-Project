import React from 'react';
import { useSelector } from 'react-redux';
import FollowerItem from './follower-item';

const FollowersList = ({ user }) => {
	const { currentUser } = useSelector((state) => state.login);

	return (
		<>
			<div className="col-11">
				<hr />
			</div>
			{user && (
				<>
					{user === currentUser && <h5> My Followers</h5>}
					{user !== currentUser && <h5> Followers</h5>}

					{!user.followers && <div>No followers found.</div>}
					{user.followers && user.followers.length === 0 && (
						<div>No followers found.</div>
					)}
					{user.followers && user.followers.length > 0 && (
						<>
							<ul
								className="list-group"
								style={{ width: '85%' }}
							>
								{user.followers.map((user) => (
									<FollowerItem
										key={user.fromId}
										user={user}
									/>
								))}
							</ul>{' '}
						</>
					)}
				</>
			)}
			{/* <div className="col-11">
				<hr />
			</div> */}
		</>
	);
};

export default FollowersList;
