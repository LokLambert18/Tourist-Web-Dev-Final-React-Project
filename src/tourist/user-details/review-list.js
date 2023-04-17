import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findReviewsByGuideThunk } from '../thunks/reviews-thunks';
import ReviewItem from './review-item';

const ReviewList = ({ guide }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log('Loading reviews of');
		console.log(guide.firstName);
		dispatch(findReviewsByGuideThunk({ gId: guide._id }));
	}, []);

	let { loading, reviewsByGuide } = useSelector((state) => state.reviews);

	console.log('reviewsByGuide');
	console.log(reviewsByGuide);

	return (
		<>
			<div className="col-11">
				<hr />
			</div>
			{loading && <h5> Loading... </h5>}
			<h5>
				{' '}
				Reviews on {guide.firstName} {guide.lastName}
			</h5>

			{!loading && !reviewsByGuide && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && reviewsByGuide && reviewsByGuide.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{reviewsByGuide.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{reviewsByGuide.map((review) => (
							<ReviewItem
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
export default ReviewList;
