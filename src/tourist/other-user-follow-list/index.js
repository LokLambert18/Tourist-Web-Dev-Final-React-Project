import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { findUserByIdThunk } from '../thunks/login-thunk';

import FollowersList from '../followers-list';
import FollowingList from '../following-list';

function OtherUserFollowList() {
	const { currentUser, otherUser, otherUserLoading } = useSelector(
		(state) => state.login
	);
	// const { uid } = useParams();

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	console.log('Dispatching findUserByIdThunk');
	// 	dispatch(findUserByIdThunk(uid));
	// }, []);

	// console.log('OtherUserFollowList');
	// console.log(uid);

	console.log(otherUser);

	// let user = {};

	// if (uid) {
	// 	user = otherUser;
	// } else {
	// 	user = currentUser;
	// }

	return (
		<>
			{otherUserLoading && <h5>Loading... </h5>}
			{/* {uid && !otherUserLoading && otherUser.role === '1' && ( */}
			{otherUser && otherUser.role === '1' && (
				<>
					<FollowersList user={otherUser} />
					<FollowingList user={otherUser} />
				</>
			)}
		</>
	);
}

export default OtherUserFollowList;
