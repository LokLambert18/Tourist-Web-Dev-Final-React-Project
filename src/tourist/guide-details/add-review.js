import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReviewThunk } from '../thunks/reviews-thunks';
import { findReviewsByAuthorGuideThunk } from '../thunks/reviews-thunks';
import { updateReviewThunk } from '../thunks/reviews-thunks';

const AddReview = ({ ids }) => {
	let { reviewByAuthorGuide, loading } = useSelector(
		(state) => state.reviews
	);

	// let { reviewsByGuide } = useSelector((state) => state.reviews);

	const dispatch = useDispatch();
 
	useEffect(() => {
		const idsToPass = {
			aId: ids.author._id,
			gId: ids.guide._id, 
		};
		// console.log("dispatcing findReviewsByAuthorLocThunk")
		// console.log(idsToPass)
		dispatch(findReviewsByAuthorGuideThunk(idsToPass));
	}, []);

	// let reviewByAuthorGuide = reviewsByGuide.find((t) => t.authorId._id === ids.author._id)

	let [review, setReview] = useState(
		reviewByAuthorGuide ? reviewByAuthorGuide.text : ''
	);

	let name = ids.guide.firstName + ' ' + ids.guide.lastName;

	const reviewClickHandler = () => {
		if (reviewByAuthorGuide) {
			const updatedReview = {
				...reviewByAuthorGuide,
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
				guideId: ids.guide._id,
				// guideName: name,
				// guideCity: ids.guide.city,
				type: 2,
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
			{reviewByAuthorGuide && <div className='text-gray'>You wrote</div>}

			{!loading && (
				<>
					<div className="col-8">
						<textarea
							value={review}
							placeholder="Leave a review"
							className="form-control border-0"
							onChange={(event) => setReview(event.target.value)}
						></textarea>
					</div>
					<div className="col-2">
						<button
							className="rounded-pill btn btn-primary  mt-2 ps-3 pe-3 fw-bold"
							onClick={reviewClickHandler}
						>
							{reviewByAuthorGuide ? 'Update' : 'Post'}
						</button>
					</div>
					<div className="col-11">
						<hr />
					</div>{' '}
				</>
			)}
		</div>
	);
};
export default AddReview;
