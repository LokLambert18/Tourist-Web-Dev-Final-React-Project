import axios from 'axios';

const HOTELS_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hotels';
const CITY_URL = 'https://tourist-web-dev-final-node-project.onrender.com/city';
const MANAGER_URL = 'https://tourist-web-dev-final-node-project.onrender.com/manager';
const HID_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hid';
const REQUEST_URL = 'https://tourist-web-dev-final-node-project.onrender.com/hrequest';

const api = axios.create({ withCredentials: true });

export const createHotel = async (hotel) => {
	const response = await api.post(HOTELS_URL, hotel);
	return response.data;
};

export const findHotels = async () => {
	const response = await api.get(HOTELS_URL);
	const hotels = response.data;
	console.log('heree');
	console.log(hotels);
	return hotels;
};

export const deleteHotel = async (hid) => {
	console.log('deleteHotel');

	const response = await api.delete(`${HOTELS_URL}/${hid}`);
	return response.data;
};

export const updateHotel = async (hotel) => {
	const response = await api.put(`${HOTELS_URL}/${hotel._id}`, hotel);
	return hotel;
};

export const findHotelsByCity = async (city) => {
	console.log('Post in Hotels server');
	console.log(city);

	const response = await api.post(CITY_URL, { city });
	return response.data;
};

export const findHotelById = async (hid) => {
	console.log('findHotelById in Hotels server');
	console.log(hid);

	const response = await api.post(HID_URL, { hid });
	return response.data;
};

export const findHotelsByManager = async (mid) => {
	console.log('Post in Hotels server');
	console.log(mid);

	const response = await api.post(MANAGER_URL, { mid });
	return response.data;
};

export const addHotelRequest = async (request) => {
	console.log('addHotelRequest Service');
	const response = await api.put(REQUEST_URL, request);
	console.log(response.data);
	return response.data;
};
