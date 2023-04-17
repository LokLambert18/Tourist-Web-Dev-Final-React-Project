import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReviewThunk } from '../thunks/reviews-thunks';
import { findReviewsByAuthorHotelThunk } from '../thunks/reviews-thunks';
import { updateReviewThunk } from '../thunks/reviews-thunks';

const AddReview = ({ ids }) => {
	let { reviewByAuthorHotel, loading } = useSelector(
		(state) => state.reviews
	);

	// let { reviewsByHotel } = useSelector((state) => state.reviews);


	const dispatch = useDispatch();

	useEffect(() => {
		const idsToPass = {
			aId: ids.author._id,
			hId: ids.hotel._id,
		};
		// console.log("dispatcing findReviewsByAuthorLocThunk")
		// console.log(idsToPass)
		dispatch(findReviewsByAuthorHotelThunk(idsToPass));
	}, []);

	// let reviewByAuthorHotel = reviewsByHotel.find((t) => t.authorId._id === ids.author._id)


	let [review, setReview] = useState(
		reviewByAuthorHotel ? reviewByAuthorHotel.text : ''
	);
 
	const reviewClickHandler = () => {
		if (reviewByAuthorHotel) {
			const updatedReview = {
				...reviewByAuthorHotel,
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
				hotelId: ids.hotel._id,
				// hotelName: ids.hotel.name,
				// hotelCity: ids.hotel.city,
				type: 3,
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
			{reviewByAuthorHotel && <div className='text-gary'> You wrote</div>}
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
							{reviewByAuthorHotel ? 'Update' : 'Post'}
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
