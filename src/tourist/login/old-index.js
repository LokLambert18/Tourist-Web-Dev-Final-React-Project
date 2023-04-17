import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loginThunk } from '../services/login-thunk';


const Login = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');

	let loginStatus = useSelector(state => state.login.loginStatus) 

	const dispatch = useDispatch();
	const loginClickHandler = () => {
		const credentials = {
			username: username,
			password: password
		 }
		console.log("dispatching credentials")
		dispatch(loginThunk(credentials));
	};
	return (
		<>
		{
			loginStatus == -1 &&
			<div className='alert alert-danger'>
				{"invalid credentials!!"}
			</div>
		}

			<div className="row m-2">
				<div className="col-10">
					<ul className="list-group">
						<form>
							<div>
								<input
									className="register-input mt-2 mb-2"
									id="username"
									type="text"
									placeholder={'username'}
									onChange = {(event) => setUsername(event.target.value)}
								/>
							</div>
							<div>
								<input
									className="register-input mt-2 mb-2"
									id="password"
									type="text"
									placeholder={'password'}
									onChange = {(event) => setPassword(event.target.value)}
								/>
							</div>
							{/* <Link to="/home"> */}
							<button
								className="register-button float-end"
								type="submit"
								onClick={loginClickHandler}
							>
								login hello
							</button>
							{/* </Link> */}
						</form>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Login;
