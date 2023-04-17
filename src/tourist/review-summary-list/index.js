import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findReviewsByLocThunk } from '../thunks/location-reviews-thunks';
import { findReviewsThunk } from '../thunks/location-reviews-thunks';
import { findReviewsByAuthorLocThunk } from '../thunks/location-reviews-thunks';
import ReviewSummaryItem from './review-summary-item';

const ReviewSummaryList = ({loc}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("Loading reviews of")
		console.log(loc.xid)
		dispatch(findReviewsByLocThunk({"lId": loc.xid}));

		// dispatch(findReviewsThunk());
	}, []);

	let { loading, reviewsByLoc, reviews } = useSelector((state) => state.locReviews);
	// console.log(loc.xid)
	
	console.log("reviewsByLoc")
	
	console.log(reviewsByLoc)

	return (
		<>
			<h5> Recent Reviews on {loc.name}</h5>
			{
				loading && <h5> Loading... </h5>
			}
			{!loading && !reviewsByLoc && (
						<h5>
							No reviews.
						</h5>
			)}
			{!loading && reviewsByLoc && reviewsByLoc.length === 0 && (
				<h5>
					No reviews.
				</h5>
			)}
			
			{
				reviewsByLoc.length > 0 && (
					<>
				
					<ul
				className="list-group"
				style={{ width: '85%' }}
			>
				{reviewsByLoc.map((review) => (
					<ReviewSummaryItem
						key={review._id}
						review={review}
					/>
				))}
			</ul> </>
				)
			}
			
		</>
	);
};
export default ReviewSummaryList;
