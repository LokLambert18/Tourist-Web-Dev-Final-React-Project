import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReviewList from './review-list';
import AddReview from './add-review';
import SearchBar from '../search-bar';
import LoginTopbar from '../navigation-topbar';
import { Link } from 'react-router-dom';
import OtherUserReviewList from '../other-user-review-list';
import OtherUserFollowList from '../other-user-follow-list';
import { addFollowThunk } from '../thunks/login-thunk';
import { unFollowThunk } from '../thunks/login-thunk';
import { findUserByIdThunk } from '../thunks/login-thunk';

const UserDetails = () => {
	const { uid } = useParams();

	const { currentUser, otherUser, otherUserLoading } = useSelector(
		(state) => state.login
	);
	// const currentSearch = useSelector((state) => state.login.currentSearch);

	// console.log('hid');
	// console.log(uid);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('findUserByIdThunk dispatching in userdetails');
		dispatch(findUserByIdThunk(uid));
	}, []);

	console.log(otherUser);

	const handleFollowButton = () => {
		const follow = {
			fromId: currentUser._id,
			fromFname: currentUser.firstName,
			fromLname: currentUser.lastName,
			toId: otherUser._id,
			toFname: otherUser.firstName,
			toLname: otherUser.lastName,
		};
		console.log('Add follow');
		console.log(follow);
		dispatch(addFollowThunk(follow));
	};

	const handleUnfollowButton = () => {
		const follow = {
			fromId: currentUser._id,
			fromFname: currentUser.firstName,
			fromLname: currentUser.lastName,
			toId: otherUser._id,
			toFname: otherUser.firstName,
			toLname: otherUser.lastName,
		};
		console.log('Unfollow');
		console.log(follow);
		dispatch(unFollowThunk(follow));
	};

	let follow = 0;
	// console.log(currentUser.following.find((t) => t.toId === otherUser._id));
	if (currentUser && otherUser) {
		if (currentUser.following.find((t) => t.toId === otherUser._id)) {
			follow = 1;
		}
	}

	// let ids = {};
	// if (currentUser && guideDetails) {
	// 	ids = {
	// 		author: currentUser,
	// 		guide: guideDetails,
	// 	};
	// 	// let {idsToPass} = {"lid": detHotel.xid, "aid": currentUser._id}
	// }

	return (
		<>
			<LoginTopbar />

			<div className="row m-2">
				<div className="d-xs-none d-sm-block col-sm-1 col-md-1 col-lg-1 col-xl-2"></div>
				<div
					className="col-12 col-sm-11 col-md-11 col-lg-6 col-xl-5"
					style={{ position: 'relative' }}
				>
					{otherUserLoading && <h5>Loading... </h5>}
					{otherUser &&
						currentUser &&
						currentUser.role === '1' &&
						otherUser.role === '1' &&
						follow === 0 && (
							<button
								type="button"
								className="btn m-2 fw-bold edit-button rounded-pill float-end"
								onClick={handleFollowButton}
							>
								follow
							</button>
						)}

					{otherUser &&
						currentUser &&
						currentUser.role === '1' &&
						otherUser.role === '1' &&
						follow === 1 && (
							<button
								type="button"
								className="btn m-2 fw-bold edit-button rounded-pill float-end"
								onClick={handleUnfollowButton}
							>
								unfollow
							</button>
						)}
					{otherUser && (
						<>
							<div className="row m-2">
								<div className="col-6">
									<h5> Details </h5>
								</div>
								<div className="col-11">
									<hr />
								</div>
								<div className="col-4">
									<img
										className="img-custom"
										src={`/images/tourist/user.png`}
										alt="hotel"
									></img>
									{/* <div>
										<Link
											to={'.'}
											style={{ textDecoration: 'none' }}
										>
											{/* <button className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"> */}
									{/*</div>	Back
											{/* </button> */}
									{/*</Link>
									</div> */}
								</div>
								<div className="col-8">
									<h5>
										{otherUser.firstName}{' '}
										{otherUser.lastName}, {otherUser.city}
									</h5>

									<p>{otherUser.bio}</p>
								</div>
							</div>
							<div className="row m-2">
								<div className="col-11">
									<OtherUserFollowList />
								</div>
							</div>
						</>
					)}
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5">
					<div className="col-11">
						{otherUser && <OtherUserReviewList />}
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDetails;
