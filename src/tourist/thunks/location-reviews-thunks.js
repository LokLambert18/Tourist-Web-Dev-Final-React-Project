import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/location-reviews-services';

export const findReviewsThunk = createAsyncThunk(
	'reviews/findReviews',
	async () => await service.findReviews()
);

export const deleteReviewThunk = createAsyncThunk(
	'reviews/deleteReview',
	async (reviewId) => {
		await service.deleteReview(reviewId);
		return reviewId;
	}
);
 
export const createReviewThunk = createAsyncThunk(
	'reviews/createReview',
	async (review) => {
		const newReview = await service.createReview(review);
		return newReview;
	}
);

export const updateReviewThunk = createAsyncThunk(
	'reviews/updateReview',
	async (review) => await service.updateReview(review)
);

export const findReviewsByLocThunk = createAsyncThunk(
	'reviews/locId',
	async (locId) => await service.findReviewsByLoc(locId)
);

export const findReviewsByAuthorThunk = createAsyncThunk(
	'reviews/aid',
	async (aId) => await service.findReviewsByAuthor(aId)
);

export const findReviewsByAuthorLocThunk = createAsyncThunk(
	'reviews/ids',
	async (ids) => await service.findReviewsByAuthorLoc(ids)
);
