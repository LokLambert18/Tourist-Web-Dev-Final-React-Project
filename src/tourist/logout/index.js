import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../thunks/login-thunk';
import { Navigate } from 'react-router';


const Login = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [role, setRole] = useState('');
	let [errorMsg, setError] = useState(null);

	let {loginStatus, currentUser} = useSelector((state) => state.login);


	const dispatch = useDispatch();
	const loginClickHandler = () => {
		console.log(role);
		if (role !== '1' && role !== '2' && role !== '3') {
			setError('select a role');
			return;
		}
		setError(null);
		const credentials = {
			username: username,
			password: password,
			role: role,
		};
		dispatch(loginThunk(credentials));
	};

	if(currentUser) {
		return (<Navigate 
			to = {'/profile'}
		/>)
	} 

	return (
		<>
			<form>
				<input
					className="form-control m-2"
					style={{ width: '80%' }}
					id="username"
					type="text"
					placeholder={'username'}
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>

				<input
					className="form-control m-2"
					style={{ width: '80%' }}
					id="password"
					type="text"
					placeholder={'password'}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>

				<select
					className="form-select m-2"
					style={{ width: '80%' }}
					onChange={(event) => setRole(event.target.value)}
				>
					<option selected>login as</option>
					<option value="1">Tourist</option>
					<option value="2">Guide</option>
					<option value="3">Hotel Manager</option>
				</select>

				<button
					className="register-button float-end"
					style={{ marginRight: '20%' }}
					type="submit"
					onClick={loginClickHandler}
				>
					login
				</button>
			</form>
			{errorMsg && <div>{errorMsg}</div>}
			{loginStatus === -1 && <div>{'invalid credentials!!'}</div>}
		</>
	);
};

export default Login;
