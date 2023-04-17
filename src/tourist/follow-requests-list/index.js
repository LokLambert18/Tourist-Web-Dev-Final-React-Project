import React from 'react';
import { useSelector } from 'react-redux';
import FollowersList from '../followers-list';
import FollowingList from '../following-list';
import GuideRequestList from '../guide-request-list';

const FollowRequestsList = () => {
	const { currentUser } = useSelector((state) => state.login);

	return (
		<>
			{currentUser.role === '1' && (
				<>
					{' '}
					<FollowersList user={currentUser} />
					<FollowingList user={currentUser} />
				</>
			)}
			{currentUser.role === "2" && 
				( <>
				{/* <ReviewList guide = {currentUser}/> */}
				<GuideRequestList  guide = {currentUser}/>
				</>
				)}
		</>
	);
};

export default FollowRequestsList;
