import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findReviewsByAuthorThunk } from '../thunks/reviews-thunks';

import ReviewSummaryItem from './review-summary-item';

const UserReviewList = ({ user }) => {
	const { currentUser } = useSelector((state) => state.login);
	const { loading, reviewsByAuthor } = useSelector((state) => state.reviews);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('Loading reviews by');
		console.log(user._id);
		dispatch(findReviewsByAuthorThunk({ aId: user._id }));
	}, []);

	console.log('reviewsByAuthor');
	console.log(user);

	console.log(reviewsByAuthor);

	let locReviews = reviewsByAuthor.filter((review) => review.type === 1);
	let hotelReviews = reviewsByAuthor.filter((review) => review.type === 3);
	let guideReviews = reviewsByAuthor.filter((review) => review.type === 2);

	return (
		<>
			{loading && <h5> Loading </h5>}
			<div className="col-11">
				<hr />
			</div>
			{!loading && user === currentUser && <h5> My Location Reviews</h5>}
			{!loading && user !== currentUser && (
				<h5>
					{' '}
					Location Reviews by {user.firstName} {user.lastName}
				</h5>
			)}

			{!loading && !locReviews && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && locReviews && locReviews.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{locReviews.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{locReviews.map((review) => (
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

			{!loading && user === currentUser && <h5> My Hotel Reviews</h5>}
			{!loading && user !== currentUser && (
				<h5>
					{' '}
					Hotel Reviews by {user.firstName} {user.lastName}
				</h5>
			)}

			{!loading && !hotelReviews && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && hotelReviews && hotelReviews.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{hotelReviews.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{hotelReviews.map((review) => (
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

			{!loading && user === currentUser && <h5> My Guide Reviews</h5>}
			{!loading && user !== currentUser && (
				<h5>
					{' '}
					Guide Reviews by {user.firstName} {user.lastName}
				</h5>
			)}

			{!loading && !guideReviews && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}
			{!loading && guideReviews && guideReviews.length === 0 && (
				<ul
					className="list-group"
					style={{ width: '85%' }}
				>
					No reviews.
				</ul>
			)}

			{guideReviews.length > 0 && (
				<>
					<ul
						className="list-group"
						style={{ width: '85%' }}
					>
						{guideReviews.map((review) => (
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
export default UserReviewList;
