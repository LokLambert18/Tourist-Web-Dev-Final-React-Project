import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findReviewsByLocThunk } from '../thunks/reviews-thunks';
import { findReviewsThunk } from '../thunks/reviews-thunks';
import { findReviewsByAuthorLocThunk } from '../thunks/reviews-thunks';
import ReviewSummaryItem from './review-summary-item';

const ReviewSummaryList = ({ loc }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		// console.log('Loading reviews of');
		// console.log(loc.xid);
		dispatch(findReviewsByLocThunk({ lId: loc.xid }));

		// dispatch(findReviewsThunk());
	}, []);

	let { loading, reviewsByLoc, reviews } = useSelector(
		(state) => state.reviews
	);
	// console.log(loc.xid)

	// console.log('reviewsByLoc');

	// console.log(reviewsByLoc);

	return (
		<>
			<div className="col-11">
				<hr />
			</div>
			{loading && <h5> Loading </h5>}
			<h5> Recent Reviews on {loc.name}</h5>

			{!loading && !reviewsByLoc && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && reviewsByLoc && reviewsByLoc.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{reviewsByLoc.length > 0 && (
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
					</ul>{' '}
				</>
			)}
			<div className="col-11">
				<hr />
			</div>
		</>
	);
};
export default ReviewSummaryList;
