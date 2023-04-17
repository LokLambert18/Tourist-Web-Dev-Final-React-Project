import axios from 'axios';

const GUIDES_URL = 'http://localhost:4000/guides';
const REQUEST_URL = 'http://localhost:4000/grequest';

const api = axios.create({ withCredentials: true });

export const findGuidesByCity = async (city) => {
	console.log('Post in Guides server');
	console.log(city);

	const response = await api.post(GUIDES_URL, { city });
	return response.data;
};

export const addGuideRequest = async (request) => {
	console.log('addGuideRequest Service');
	const response = await api.put(REQUEST_URL, request);
	console.log(response.data);
	return response.data;
};
