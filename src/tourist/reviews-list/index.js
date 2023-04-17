import React from 'react';
import UserReviewList from '../user-review-list';
import GuideRequestList from '../guide-request-list';
import ReviewList from '../guide-details/review-list';

import { useSelector } from 'react-redux';

function ReviewsList() {
	const { currentUser } = useSelector((state) => state.login);

	console.log("ReviewRequestList")
	console.log(currentUser)
	return (
		<> 
			{
				currentUser.role === "1" && 
				<UserReviewList user = {currentUser}/>
			}
			{
				currentUser.role === "2" && 
				( <>
				<ReviewList guide = {currentUser}/>
				{/* <GuideRequestList  guide = {currentUser}/> */}
				</>
				)

			}
			
		</>
	);
}

export default ReviewsList;
