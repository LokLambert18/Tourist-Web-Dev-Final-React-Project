import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/reviews-services';

export const findReviewsThunk = createAsyncThunk(
	'reviews/findReviews',
	async () => await service.findReviews()
);

export const findHotelReviewsThunk = createAsyncThunk(
	'reviews/findHotelReviews',
	async () => await service.findHotelReviews()
);

export const findGuideReviewsThunk = createAsyncThunk(
	'reviews/findGuideReviews',
	async () => await service.findGuideReviews()
);

export const findLocationReviewsThunk = createAsyncThunk(
	'reviews/findLocationReviews',
	async () => await service.findLocationReviews()
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

export const findReviewsByHotelThunk = createAsyncThunk(
	'reviews/hid',
	async (hId) => await service.findReviewsByHotel(hId)
);

export const findReviewsByGuideThunk = createAsyncThunk(
	'reviews/gid',
	async (gId) => await service.findReviewsByGuide(gId)
);

export const findReviewsByAuthorLocThunk = createAsyncThunk(
	'reviews/lids',
	async (ids) => await service.findReviewsByAuthorLoc(ids)
);

export const findReviewsByAuthorTypeThunk = createAsyncThunk(
	'reviews/atype',
	async (ids) => await service.findReviewsByAuthorType(ids)
);

export const findReviewsByAuthorHotelThunk = createAsyncThunk(
	'reviews/hids',
	async (ids) => await service.findReviewsByAuthorHotel(ids)
);

export const findReviewsByAuthorGuideThunk = createAsyncThunk(
	'reviews/gids',
	async (ids) => await service.findReviewsByAuthorGuide(ids)
);
