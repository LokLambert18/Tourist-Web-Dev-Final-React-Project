import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { createUserThunk, checkUsernameThunk } from '../services/login-thunk';


const RegisterProfile = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [validatePassword, setValidatePassword] = useState('');
	let [error, setError] = useState(null);

	const {oldUser, loading} = useSelector(state => state.login)
	// const {locations, loading} = useSelector(state => state.locByCity)

	const dispatch = useDispatch();
	const registerClickHandler = () => {
		if(password !== validatePassword) {
			setError('password must match')
		}
		else {
			setError(null)
		}
		// console.log("checking username avialability")
		// const un = {
		// 	username: username,
		// }
		// // dispatch(checkUsernameThunk(un));
		
		// const oldUser = await checkUsernameThunk(un);
		// console.log(oldUser)
			
		// console.log("dispatching newUser Register")
		const newUser = {
		username: username,
		password: password
		}
		dispatch(createUserThunk(newUser));	
	};

	return (
		<>
		{
			error &&
			<div className='alert alert-danger'>
				{error}
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
									type="Text"
									placeholder={'username'}
									onChange = {(event) => setUsername(event.target.value)}
								/>
							</div>
							<div>
								<input
									className="register-input mt-2 mb-2"
									id="password"
									type="Text"
									placeholder={'password'}
									onChange = {(event) => setPassword(event.target.value)}
								/>
							</div>
							<div>
								<input
									className="register-input mt-2 mb-2"
									id="validatePassword"
									type="Text"
									placeholder={'confirm password'}
									onChange = {(event) => setValidatePassword(event.target.value)}
								/>
							</div>

							<div>
								<input
									className="register-input mt-2 mb-2"
									id="firstname"
									type="Text"
									placeholder={'first name'}
								/>
							</div>

							<div>
								<input
									className="register-input mt-2 mb-2"
									id="lastname"
									type="Text"
									placeholder={'last name'}
								/>
							</div>

							<div>
								<input
									className="register-input mt-2 mb-2"
									id="age"
									type="Text"
									placeholder={'age'}
								/>
							</div>

							<div>
								<input
									className="register-input mt-2 mb-2"
									id="country"
									type="Text"
									placeholder={'country'}
								/>
							</div>
							{/* <Link to="/home"> */}
							<button
								className="register-button float-end"
								type="submit"
								onClick = {registerClickHandler}
							>
								register
							</button>
							{/* </Link> */}
						</form>
					</ul>
				</div>
			</div>
		</>
	);
};

export default RegisterProfile;
