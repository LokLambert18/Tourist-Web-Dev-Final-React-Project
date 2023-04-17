import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReviewThunk } from '../thunks/reviews-thunks';
import {
	findReviewsByAuthorLocThunk,
	findReviewsByLocThunk,
} from '../thunks/reviews-thunks';
import { updateReviewThunk } from '../thunks/reviews-thunks';

const RateAndReview = ({ ids }) => {
	// let { reviewsByLoc, reviews } = useSelector(
	// (state) => state.reviews
	// );
	let { reviewByAuthorLoc, loading } = useSelector((state) => state.reviews);
	const currentSearch = useSelector((state) => state.login.currentSearch);

	const dispatch = useDispatch();

	useEffect(() => {
		const idsToPass = {
			aId: ids.author._id,
			lId: ids.loc.xid,
		};
		// console.log("dispatcing findReviewsByAuthorLocThunk")
		// console.log(idsToPass)
		dispatch(findReviewsByAuthorLocThunk(idsToPass));
	}, []);

	// let reviewByAuthorLoc = reviewsByLoc.find((t) => t.authorId === ids.author._id)

	let [review, setReview] = useState(
		reviewByAuthorLoc ? reviewByAuthorLoc.text : ''
	);

	// console.log('reviewByAuthorLoc');
	// console.log(reviewByAuthorLoc);

	const reviewClickHandler = () => {
		if (reviewByAuthorLoc) {
			const updatedReview = {
				...reviewByAuthorLoc,
				...{ text: review },
			};
			console.log('Updating review');
			console.log(updatedReview);
			dispatch(updateReviewThunk(updatedReview));
		} else {
			const newReview = {
				authorId: ids.author._id,
				// username: ids.author.username,
				// firstName: ids.author.firstName,
				// lastName: ids.author.lastName,
				// image: ids.author.image,
				locId: ids.loc.xid,
				locName: ids.loc.name,
				locCity: currentSearch,
				type: 1,
				text: review,
			};
			console.log('Dispatching new review');
			console.log(newReview);
			dispatch(createReviewThunk(newReview));
		}
	};
	return (
		<div className="row">
			<div className="col-11">
				<hr />
			</div>
			{reviewByAuthorLoc && <div className="text-gray">You wrote</div>}
			{
				<>
					<div className="col-8">
						<textarea
							value={review}
							// placeholder="Leave a review"
							className="form-control border-0"
							onChange={(event) => setReview(event.target.value)}
						></textarea>
					</div>
					<div className="col-2">
						<button
							className="rounded-pill btn btn-primary  mt-2 ps-3 pe-3 fw-bold"
							onClick={reviewClickHandler}
						>
							{reviewByAuthorLoc ? 'Update' : 'Post'}
						</button>
					</div>
					<div className="col-11">
						<hr />
					</div>{' '}
				</>
			}
		</div>
	);
};
export default RateAndReview;
