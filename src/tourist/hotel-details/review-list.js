import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findReviewsByHotelThunk } from '../thunks/reviews-thunks';
import ReviewItem from './review-item';

const ReviewList = ({ hotel }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log('Loading reviews of');
		console.log(hotel.name);
		dispatch(findReviewsByHotelThunk({ hId: hotel._id }));
	}, []);

	let { loading, reviewsByHotel } = useSelector((state) => state.reviews);

	console.log('reviewsByHotel');
	console.log(reviewsByHotel);

	return (
		<>
			<div className="col-11">
				<hr />
			</div>
			{loading && <h5> Loading... </h5>}
			<h5> Reviews on {hotel.name}</h5>

			{!loading && !reviewsByHotel && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && reviewsByHotel && reviewsByHotel.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{reviewsByHotel.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{reviewsByHotel.map((review) => (
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
