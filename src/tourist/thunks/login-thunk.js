import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/login-services';

export const loginThunk = createAsyncThunk('login', async (credentials) => {
	const selectedUser = await service.login(credentials);
	return selectedUser;
});

export const checkLoginThunk = createAsyncThunk('checkLogin', async () => {
	const selectedUser = await service.checkLogin();
	console.log(selectedUser);
	return selectedUser;
});

// export const findUsersThunk = createAsyncThunk(
// 	'findUsers',
// 	async () => await service.findUsers()
// );

export const findUserByIdThunk = createAsyncThunk(
	'findUserbyId',
	async (uid) => await service.findUserById(uid)
);

export const createUserThunk = createAsyncThunk('addUser', async (newUser) => {
	const addedUser = await service.createUser(newUser);
	return addedUser;
});

export const logoutThunk = createAsyncThunk('logout', async () => {
	const selectedUser = await service.logout();
	return selectedUser;
});

export const updateUserThunk = createAsyncThunk(
	'updateUser',
	async (user) => await service.updateUser(user)
);

export const addFollowThunk = createAsyncThunk(
	'addFollow',
	async (follow) => await service.addFollow(follow)
);

export const unFollowThunk = createAsyncThunk(
	'unFollow',
	async (follow) => await service.unFollow(follow)
);
