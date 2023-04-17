import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserThunk } from '../thunks/login-thunk';
import { Navigate } from 'react-router';

const Register = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [validatePassword, setValidatePassword] = useState('');
	let [role, setRole] = useState('');
	let [firstName, setFirstName] = useState('');
	let [lastName, setLastName] = useState('');
	let [city, setCity] = useState('');
	// let [email, setEmail] = useState('');

	let [errorMsg, setError] = useState(null);

	let { currentUser, regStatus } = useSelector((state) => state.login);

	const dispatch = useDispatch();
	const registerClickHandler = () => {
		if (password !== validatePassword) {
			setError('Passwords not matching');
			return;
		}
		if (role !== '1' && role !== '2' && role !== '3') {
			setError('Select a role');
			return;
		}
		if (username === '') {
			setError('Enter Username');
			return;
		}
		if (password === '') {
			setError('Enter Password');
			return;
		}
		if (firstName === '') {
			setError('Enter First Name');
			return;
		}
		if (lastName === '') {
			setError('Enter Last Name');
			return;
		}
		if (city === '') {
			setError('Enter city');
			return;
		}

		setError(null);
		const newUser = {
			username,
			password,
			role,
			firstName,
			lastName,
			city,
			
		};
		console.log(newUser);
		dispatch(createUserThunk(newUser));
	};

	if (regStatus === 1) {
		return (<Navigate
			to = {'/home/login'}
		/>)
		// return (
		// 	<>
		// 		<div>{'Registration successful!! login now...'}</div>
		// 	</>
		// );
	}

	return (
		<>
			{/* <form encType="multipart/form-data"> */}
			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="username"
				type="Text"
				placeholder={'username'}
				value={username}
				onChange={(event) => setUsername(event.target.value)}
			/>

			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="password"
				type="Text"
				placeholder={'password'}
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>

			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="validatePassword"
				type="Text"
				placeholder={'confirm password'}
				value={validatePassword}
				onChange={(event) => setValidatePassword(event.target.value)}
			/>

			<select
				className="form-select mb-2"
				style={{ width: '80%' }}
				onChange={(event) => setRole(event.target.value)}
			>
				<option selected>register as</option>
				<option value="1">Tourist</option>
				<option value="2">Guide</option>
				<option value="3">Hotel Manager</option>
			</select>

			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="firstName"
				type="Text"
				placeholder={'First Name'}
				value={firstName}
				onChange={(event) => setFirstName(event.target.value)}
			/>

			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="lastName"
				type="Text"
				placeholder={'Last Name'}
				value={lastName}
				onChange={(event) => setLastName(event.target.value)}
			/>

			{/* <input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="email"
				type="email"
				placeholder={'Email'}
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/> */}

			<input
				className="form-control mb-2"
				style={{ width: '80%' }}
				id="city"
				type="Text"
				placeholder={'Your City'}
				value={city}
				onChange={(event) => setCity(event.target.value)}
			/>

			{/* <input
				type="file"
				name="myImage"
				accept="image/*"
			/>
			<input
				type="submit"
				value="Upload Photo"
			></input> */}

			<button
				className="btn btn-primary float-end"
				style={{ marginRight: '20%' }}
				type="submit"
				onClick={registerClickHandler}
			>
				register
			</button>
			{errorMsg && <div> {errorMsg}</div>}

			{regStatus === -1 && <div>{'username already exists!!'}</div>}
			{/* </form> */}
		</>
	);
};

export default Register;
