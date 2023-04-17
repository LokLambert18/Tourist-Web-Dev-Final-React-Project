import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewSummaryItem from './review-summary-item';
import {
	findHotelReviewsThunk,
	findGuideReviewsThunk,
	findLocationReviewsThunk,
} from '../thunks/reviews-thunks';

const HomeReviewsList = ({ loc }) => {
	let {
		lloading,
		hloading,
		gloading,
		locReviews,
		guideReviews,
		hotelReviews,
	} = useSelector((state) => state.reviews);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findLocationReviewsThunk());
		dispatch(findGuideReviewsThunk());
		dispatch(findHotelReviewsThunk());
	}, []);

	// console.log(loc.xid)

	// console.log('reviewsByLoc');

	// console.log(reviewsByLoc);

	return (
		<div>
			<div className="row m-2">
				<div className="col-1"></div>
				<div className="col-11">
					{lloading && <h5> Loading </h5>}
					<div className="col-11">
						<hr />
					</div>
					{!lloading && <h5> Recent Location Reviews</h5>}

					{!lloading && !locReviews && (
						<ul
							className="list-group"
							style={{ width: '85%' }}
						>
							No reviews.
						</ul>
					)}
					{!lloading && locReviews && locReviews.length === 0 && (
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
					{hloading && <h5> Loading </h5>}

					<div className="col-11">
						<hr />
					</div>

					{!hloading && <h5> Recent Hotel Reviews</h5>}

					{!hloading && !hotelReviews && (
						<ul
							className="list-group"
							style={{ width: '85%' }}
						>
							No reviews.
						</ul>
					)}
					{!hloading && hotelReviews && hotelReviews.length === 0 && (
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
					{gloading && <h5> Loading </h5>}

					<div className="col-11">
						<hr />
					</div>

					{!gloading && <h5>Recent Guide Reviews</h5>}

					{!gloading && !guideReviews && (
						<ul
							className="list-group"
							style={{ width: '85%' }}
						>
							No reviews.
						</ul>
					)}
					{!gloading && guideReviews && guideReviews.length === 0 && (
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
				</div>
			</div>
		</div>
	);
};
export default HomeReviewsList;
