import React, { useEffect } from 'react';
import UserReviewList from '../user-review-list';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { findUserByIdThunk } from '../thunks/login-thunk';

function OtherUserReviewList() {
	const { currentUser, otherUser, otherUserLoading } = useSelector(
		(state) => state.login
	);
	// const { uid } = useParams();

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(findUserByIdThunk(uid));
	// }, []);

	console.log('OtherReviewRequestList');
	console.log(otherUser);

	// let user = {};

	// if (otherUser) {
	// 	user = otherUser;
	// } else {
	// 	user = currentUser;
	// }

	return (
		<>
			{otherUserLoading && <h5>Loading... </h5>}
			{otherUser && otherUser.role === '1' && (
				<UserReviewList user={otherUser} />
			)}
		</>
	);
}

export default OtherUserReviewList;
