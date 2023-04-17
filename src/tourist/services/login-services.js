import axios from 'axios';

const LOGIN_URL = 'http://localhost:4000/login';
const USERS_URL = 'http://localhost:4000/users';
const ID_URL = 'http://localhost:4000/id';
const LOGOUT_URL = 'http://localhost:4000/logout';
const FOLLOW_URL = 'http://localhost:4000/follow';
const UNFOLLOW_URL = 'http://localhost:4000/unfollow';

const api = axios.create({ withCredentials: true });

export const login = async (credentials) => {
	console.log('Login service');
	const response = await api.post(LOGIN_URL, credentials);
	console.log(response.data);
	return response.data;
};

export const checkLogin = async () => {
	console.log('checkLogin service');
	const response = await api.get(LOGIN_URL);
	console.log(response.data);
	return response.data;
};
// export const findUsers = async () => {
// 	const response = await api.get(USERS_URL);
// 	const users = response.data;
// 	return users;
// };

export const findUserById = async (uid) => {
	console.log('findUserById');
	console.log(uid);

	const response = await api.post(ID_URL, { uid });
	return response.data;
};

export const createUser = async (newUser) => {
	const response = await api.post(USERS_URL, newUser);
	return response.data;
};

export const logout = async () => {
	console.log('Logout service');
	const response = await api.post(LOGOUT_URL);
	console.log(response.data);
	return response.data;
};

export const updateUser = async (user) => {
	console.log('updateUser Service');
	const response = await api.put(`${USERS_URL}/${user._id}`, user);
	console.log('response.data');
	return response.data;
};

export const addFollow = async (follow) => {
	console.log('addFollow Service');
	const response = await api.put(FOLLOW_URL, follow);
	console.log('response.data');
	return response.data;
};

export const unFollow = async (follow) => {
	console.log('unFollow Service');
	const response = await api.put(UNFOLLOW_URL, follow);
	console.log('response.data');
	return response.data;
};
