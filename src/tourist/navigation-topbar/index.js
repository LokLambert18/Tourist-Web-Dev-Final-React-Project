import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { checkLoginThunk } from '../thunks/login-thunk';
import { logoutThunk } from '../thunks/login-thunk';

const LoginTopbar = () => {
	const { pathname } = useLocation();
	const { currentUser } = useSelector((state) => state.login);

	const paths = pathname.split('/');
	var active = '';

	if (paths[2] === undefined) {
		active = paths[1];
	} else {
		active = paths[2];
	}

	let loggedIn = false;
	if (currentUser) {
		loggedIn = true;
	}

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('CheckLogin Thunk dispatching');
		dispatch(checkLoginThunk());
	}, []);

	const logoutClickHandler = () => {
		dispatch(logoutThunk());
	};

	console.log(currentUser);

	return (
		<>
			<nav className="navbar navbar-expand-md navbar-dark bg-primary">
				{/* <div className="container-fluid"> */}
				<Link
					to="/home"
					className="navbar-brand"
				>
					<img
						src="/images/tourist/logo.png"
						width="30"
						height="30"
						class="d-inline-block align-top"
						alt=""
					></img>{' '}
					Tourist
				</Link>

				{/* <ul className="navbar-nav  me-auto "> */}
				{/* <li className="nav-item "> */}
				<button className="btn btn-primary float-end btn-topbar">
					<span>
						<Link
							to="/search"
							className={`nav-link ${
								active === 'search' ? 'active' : ''
							}`}
						>
							{' '}
							Search
						</Link>
					</span>
				</button>
				{/* </li> */}
				{/* <li className="nav-item "> */}
				<button className="btn btn-primary float-end btn-topbar">
					<span>
						{loggedIn === false ? (
							<Link
								to="/home/register"
								className={`nav-link ${
									active === 'register' ? 'active' : ''
								}`}
								// className="btn btn-primary btn-block btn-topbar"
							>
								{' '}
								Register
							</Link>
						) : (
							<Link
								to="/profile"
								className={`nav-link ${
									active === 'profile' ? 'active' : ''
								}`}
								// className="btn btn-primary btn-block btn-topbar"
							>
								{currentUser.firstName} {currentUser.lastName}
								{/* <div>@{currentUser.username}</div> */}
							</Link>
						)}
					</span>{' '}
				</button>
				{/* </li> */}
				{/* <li className="nav-item "> */}
				<button className="btn btn-primary float-end btn-topbar">
					<span>
						{loggedIn === false ? (
							<Link
								to="/home/login"
								className={`nav-link ${
									active === 'login' ? 'active' : ''
								}`}
							>
								{' '}
								Login
							</Link>
						) : (
							<span
								className="nav-link"
								onClick={logoutClickHandler}
							>
								{' '}
								Logout
							</span>
						)}
					</span>
				</button>
				{/* </li> */}
				{/* </ul> */}
				{/* </div> */}
				{/* </div> */}
			</nav>
		</>
	);
};

export default LoginTopbar;
