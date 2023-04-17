import axios from 'axios';
const REVIEWS_URL = 'http://localhost:4000/reviews';
const IDS_URL = 'http://localhost:4000/ids';
const LOC_URL = 'http://localhost:4000/locid';
const AUTHOR_URL = 'http://localhost:4000/authorid';

const api = axios.create({ withCredentials: true });

export const createReview = async (review) => {
	const response = await api.post(REVIEWS_URL, review);
	return response.data;
};

export const findReviews = async () => {
	const response = await api.get(REVIEWS_URL);
	const reviews = response.data;
	return reviews;
};

export const deleteReview = async (tid) => {
	const response = await api.delete(`${REVIEWS_URL}/${tid}`);
	return response.data;
};

export const updateReview = async (review) => {
	console.log('updateReview Service');
	const response = await api.put(`${REVIEWS_URL}/${review._id}`, review);
	console.log('response.data');
	return response.data;
};

export const findReviewsByLoc = async (locId) => {
	console.log('Post in server');
	const response = await api.post(LOC_URL, locId);
	return response.data;
};

export const findReviewsByAuthor = async (aId) => {
	const response = await api.post(AUTHOR_URL, aId);
	return response.data;
};

export const findReviewsByAuthorLoc = async (ids) => {
	const response = await api.post(IDS_URL, ids);
	return response.data;
};
