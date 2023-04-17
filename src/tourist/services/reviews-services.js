import axios from 'axios';
const REVIEWS_URL = 'http://localhost:4000/reviews';
const locAuthor_URL = 'http://localhost:4000/locAuthor';
const hotelAuthor_URL = 'http://localhost:4000/hotelAuthor';
const guideAuthor_URL = 'http://localhost:4000/guideAuthor';
const authortype_URL = 'http://localhost:4000/authortype';

const HOTELREVIEWS_URL = 'http://localhost:4000/hotelReviews';
const GUIDEREVIEWS_URL = 'http://localhost:4000/guideReviews';
const LOCREVIEWS_URL = 'http://localhost:4000/locReviews';

const LOC_URL = 'http://localhost:4000/locid';
const AUTHOR_URL = 'http://localhost:4000/authorid';
const HOTEL_URL = 'http://localhost:4000/hotelid';
const GUIDE_URL = 'http://localhost:4000/guideid';
const TYPE_URL = 'http://localhost:4000/type';

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

export const findHotelReviews = async () => {
	const response = await api.get(HOTELREVIEWS_URL);
	const reviews = response.data;
	return reviews;
};

export const findGuideReviews = async () => {
	const response = await api.get(GUIDEREVIEWS_URL);
	const reviews = response.data;
	return reviews;
};

export const findLocationReviews = async () => {
	const response = await api.get(LOCREVIEWS_URL);
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

export const findReviewsByHotel = async (hId) => {
	const response = await api.post(HOTEL_URL, hId);
	return response.data;
};

export const findReviewsByGuide = async (gId) => {
	const response = await api.post(GUIDE_URL, gId);
	return response.data;
};

export const findReviewsByAuthor = async (aId) => {
	console.log('findReviewsByAuthor');
	console.log(aId);
	const response = await api.post(AUTHOR_URL, aId);
	return response.data;
};

export const findReviewsByAuthorLoc = async (ids) => {
	const response = await api.post(locAuthor_URL, ids);
	return response.data;
};

export const findReviewsByAuthorType = async (ids) => {
	const response = await api.post(authortype_URL, ids);
	return response.data;
};

export const findReviewsByType = async (type) => {
	console.log('findReviewsByType in server');
	const response = await api.post(TYPE_URL, type);
	return response.data;
};

export const findReviewsByAuthorHotel = async (ids) => {
	const response = await api.post(hotelAuthor_URL, ids);
	return response.data;
};

export const findReviewsByAuthorGuide = async (ids) => {
	const response = await api.post(guideAuthor_URL, ids);
	return response.data;
};
