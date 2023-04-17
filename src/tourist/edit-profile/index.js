import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginTopbar from '../navigation-topbar';
import SearchBar from '../search-bar';

import { updateUserThunk } from '../thunks/login-thunk';

import './index.css';

const EditProfile = () => {
	const { currentUser } = useSelector((state) => state.login);

	// const currentUser = currentUsers[0];

	const dispatch = useDispatch();

	var [fname, setfName] = useState(currentUser.firstName);
	var [lname, setlName] = useState(currentUser.lastName);
	let [bio, setBio] = useState(currentUser.bio);
	var [city, setCity] = useState(currentUser.city);
	var [email, setEmail] = useState(currentUser.email);
	var [phone, setPhone] = useState(currentUser.phone);

	const saveProfileHandler = () => {
		const newProfile = {
			...currentUser,
			...{
				firstName: fname,
				lastName: lname,
				bio: bio,
				city: city,
				email: email,
				phone: phone,
			},
		};
		console.log('Updating profile');
		console.log(newProfile);
		dispatch(updateUserThunk(newProfile));
	};

	return (
		<>
			<LoginTopbar />

			{/* <SearchBar /> */}

			<div className="row m-2">
				<div className="col-2 col-md-2 col-lg-1 col-xl-2"></div>
				<div
					className="col-10 col-md-10 col-lg-7 col-xl-6"
					style={{ position: 'relative' }}
				>
					<form>
						<div className="form-group currentUser-info">
							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">
										First Name
									</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={fname}
											onChange={(event) =>
												setfName(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>

							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">
										Last Name
									</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={lname}
											onChange={(event) =>
												setlName(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>

							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">
										About me
									</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={bio}
											onChange={(event) =>
												setBio(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>
							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">City</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={city}
											onChange={(event) =>
												setCity(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>
							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">
										Email id
									</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={email}
											onChange={(event) =>
												setEmail(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>
							<ul className="list-group m-2">
								<li className="list-group-item border-gray">
									<label className="text-gray">
										Contact number
									</label>

									<div>
										<input
											className="form-control border-0"
											type="text"
											value={phone}
											onChange={(event) =>
												setPhone(event.target.value)
											}
										/>
									</div>
								</li>
							</ul>
						</div>

						<div className="form-group">
							<Link to="/profile">
								<button
									type="button"
									className="btn m-2 edit-button rounded-pill float-end"
									onClick={saveProfileHandler}
								>
									save
								</button>
							</Link>
							<Link to="/profile">
								<button
									type="button"
									className="btn m-2  edit-button rounded-pill float-end"
								>
									cancel
								</button>
							</Link>
						</div>
					</form>
				</div>
				<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"></div>
			</div>
		</>
	);
};

export default EditProfile;
