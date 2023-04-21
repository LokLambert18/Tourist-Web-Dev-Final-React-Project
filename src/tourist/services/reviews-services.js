import axios from 'axios';
const REVIEWS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/reviews';
const locAuthor_URL = 'https://tourist-web-dev-final-node-project.onrender.com/locAuthor';
const hotelAuthor_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hotelAuthor';
const guideAuthor_URL = 'https://tourist-web-dev-final-node-project.onrender.com/guideAuthor';
const authortype_URL = 'https://tourist-web-dev-final-node-project.onrender.com/authortype';

const HOTELREVIEWS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hotelReviews';
const GUIDEREVIEWS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/guideReviews';
const LOCREVIEWS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/locReviews';

const LOC_URL = 'https://tourist-web-dev-final-node-project.onrender.com/locid';
const AUTHOR_URL = 'https://tourist-web-dev-final-node-project.onrender.com/authorid';
const HOTEL_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hotelid';
const GUIDE_URL = 'https://tourist-web-dev-final-node-project.onrender.com/guideid';
const TYPE_URL = 'https://tourist-web-dev-final-node-project.onrender.com/type';

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
