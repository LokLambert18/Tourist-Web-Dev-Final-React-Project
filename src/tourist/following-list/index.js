import React from 'react';
import { useSelector } from 'react-redux';
import FollowingItem from './following-item';

const FollowingList = ({ user }) => {
	const { currentUser } = useSelector((state) => state.login);

	return (
		<>
			{user && (
				<>
					<div className="col-11">
						<hr />
					</div>

					{user === currentUser && <h5> My Following</h5>}
					{user !== currentUser && <h5>Follows</h5>}

					{!user.following && <div>No following found.</div>}
					{user.following && user.following.length === 0 && (
						<div>No following found.</div>
					)}
					{user.following && user.following.length > 0 && (
						<>
							<ul
								className="list-group"
								style={{ width: '85%' }}
							>
								{user.following.map((user) => (
									<FollowingItem
										key={user.toId}
										user={user}
									/>
								))}
							</ul>{' '}
						</>
					)}
				</>
			)}
			<div className="col-11">
				<hr />
			</div>
		</>
	);
};

export default FollowingList;
