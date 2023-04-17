import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router';
import { addFollowThunk } from '../thunks/login-thunk';
import { unFollowThunk } from '../thunks/login-thunk';
import { findUserByIdThunk } from '../thunks/login-thunk';

import './index.css';

const ProfileView = () => {
	// const { uid } = useParams();
	// const { otherUser, otherUserLoading } = useSelector((state) => state.login);
	const { currentUser, loading } = useSelector((state) => state.login);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(findUserByIdThunk(uid));
	// }, []);

	// const handleFollowButton = () => {
	// 	const follow = {
	// 		fromId: currentUser._id,
	// 		fromFname: currentUser.firstName,
	// 		fromLname: currentUser.lastName,
	// 		toId: otherUser._id,
	// 		toFname: otherUser.firstName,
	// 		toLname: otherUser.lastName,
	// 	};
	// 	console.log('Add follow');
	// 	console.log(follow);
	// 	dispatch(addFollowThunk(follow));
	// };

	// const handleUnfollowButton = () => {
	// 	const follow = {
	// 		fromId: currentUser._id,
	// 		fromFname: currentUser.firstName,
	// 		fromLname: currentUser.lastName,
	// 		toId: otherUser._id,
	// 		toFname: otherUser.firstName,
	// 		toLname: otherUser.lastName,
	// 	};
	// 	console.log('Unfollow');
	// 	console.log(follow);
	// 	dispatch(unFollowThunk(follow));
	// };

	// let otherUser = {};

	// if (otherUser) {
	// 	otherUser = otherUser;
	// } else {
	// 	otherUser = currentUser;
	// }

	// if (!currentUser) {
	// 	return <Navigate to={'/home/login'} />;
	// }

	// let follow = 0;
	// // console.log(currentUser.following.find((t) => t.toId === otherUser._id));
	// if (currentUser) {
	// 	if (currentUser.following.find((t) => t.toId === otherUser._id)) {
	// 		follow = 1;
	// 	}
	// }

	// console.log("Profile")
	// console.log(otherUser)
	// console.log(uid)
	// console.log(otherUser)

	// const dob = new Date(otherUser.dateOfBirth).toLocaleDateString('en-us', {
	// 	year: 'numeric',
	// 	month: 'long',
	// 	day: 'numeric',
	// });

	// const doj = new Date(otherUser.dateJoined).toLocaleDateString('en-us', {
	// 	year: 'numeric',
	// 	month: 'long',
	// });

	return (
		<>
			{
				<Link to="/edit-profile">
					<button
						type="button"
						className="btn m-2 fw-bold edit-button rounded-pill float-end"
					>
						edit profile
					</button>
				</Link>
			}

			{
				<div className="form-group profile-info">
					<div className="row mt-2">
						<div className="col-6">
							<h5> Details </h5>
						</div>
						<div className="col-11">
							<hr />
						</div>
						<div className="col-4">
							<img
								height={100}
								width={100}
								className="profile-picture rounded-circle"
								src={`/images/tourist/user.png`}
								alt="profilePicture"
							/>
							{currentUser.role === '1' && (
								<div className="mt-5">
									<div>
										<span className="fw-bold">
											{currentUser.following.length}{' '}
										</span>
										<span className="text-gray">
											{' '}
											Following &nbsp; &nbsp;
										</span>
									</div>
									<div>
										<span className="fw-bold">
											{currentUser.followers.length}{' '}
										</span>
										<span className="text-gray">
											{' '}
											Followers
										</span>
									</div>
								</div>
							)}
						</div>

						<div className="col-8">
							<span className="fw-bold">
								{currentUser.firstName} {currentUser.lastName}{' '}
							</span>
							<span className={'text-gray'}>
								@{currentUser.username}
							</span>

							<div className="form-group row">
								<label
									for="city"
									className="col-sm-4 col-form-label text-gray"
								>
									City:
								</label>
								<div className="col-sm-8">
									<input
										type="text"
										readonly=""
										className="form-control-plaintext"
										id="staticEmail"
										value={currentUser.city}
									/>
								</div>
							</div>
							{
								<>
									<div className="form-group row">
										<label
											for="city"
											className="d-xs-none d-sm-block col-sm-4 col-form-label text-gray"
										>
											Email:
										</label>
										<div className="col-sm-8">
											<input
												type="text"
												readonly=""
												className="form-control-plaintext"
												id="staticEmail"
												value={currentUser.email}
											/>
										</div>
									</div>
									<div className="form-group row">
										<label
											for="city"
											className="col-sm-4 col-form-label text-gray"
										>
											Phone:
										</label>
										<div className="col-sm-8">
											<input
												type="text"
												readonly=""
												className="form-control-plaintext"
												id="staticEmail"
												value={currentUser.phone}
											/>
										</div>
									</div>
								</>
							}
							<div className="col-10">
								<hr />
							</div>
							<div className="form-group row">
								<div className="col-sm-10">
									<input
										type="text"
										readonly=""
										className="form-control-plaintext"
										id="staticEmail"
										value={currentUser.bio}
									/>
								</div>
							</div>
						</div>

						<div className="col-11">
							<hr />
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default ProfileView;
