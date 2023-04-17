import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReviewList from './review-list';
import AddReview from './add-review';
import SearchBar from '../search-bar';
import LoginTopbar from '../navigation-topbar';
import { Link } from 'react-router-dom';

import { addGuideRequestThunk } from '../thunks/guides-by-city-thunks';
// import { findUserByIdThunk } from '../thunks/login-thunk';

const GuideDetails = () => {
	const { gid } = useParams();
	const { guides, loading, requested } = useSelector(
		(state) => state.guidesByCity
	);
	// const { otherUser, otherUserLoading } = useSelector((state) => state.login);
	const currentSearch = useSelector((state) => state.login.currentSearch);

	let { currentUser } = useSelector((state) => state.login);
	let ids = {};

	// console.log('hid');
	// console.log(gid);

	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(findUserByIdThunk(gid));
	// }, []);

	const handleRequestButton = () => {
		const request = {
			gId: gid,
			fromId: currentUser._id,
			fromFname: currentUser.firstName,
			fromLname: currentUser.lastName,
			fromImage: currentUser.image,
			fromEmail: currentUser.email,
			fromPhone: currentUser.phone,
			status: 'new',
		};
		console.log(requested);
		console.log('Add request');
		console.log(request);
		dispatch(addGuideRequestThunk(request));
	};

	console.log('guides');
	console.log(guides);
	const guideDetails = guides.find((g) => g._id === gid);
	console.log('guideDetails');
	console.log(guideDetails);

	if (currentUser && guideDetails) {
		ids = {
			author: currentUser,
			guide: guideDetails,
		};
		// let {idsToPass} = {"lid": detHotel.xid, "aid": currentUser._id}
	}
	return (
		<>
			<LoginTopbar />

			<div className="row m-2">
				<div className="d-sm-none d-md-none d-lg-block col-lg-1 col-xl-2"></div>
				<div
					className="col-12 col-sm-11 col-md-11 col-lg-6 col-xl-5"
					style={{ position: 'relative' }}
				>
					{loading && <h5>Loading... </h5>}
					{currentUser && !requested && currentUser.role === '1' && (
						<button
							type="button"
							className="btn m-2 fw-bold edit-button rounded-pill float-end"
							onClick={handleRequestButton}
						>
							Request a callback
						</button>
					)}
					{currentUser && requested && currentUser.role === '1' && (
						<button
							type="button"
							className="btn m-2 fw-bold edit-button rounded-pill float-end"
						>
							Callback requested
						</button>
					)}
					{guideDetails && (
						<>
							<div className="row m-2">
								<div className="col-6">
									<h5> Guide Details </h5>
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
											to={`/search/${currentSearch}`}
											style={{ textDecoration: 'none' }}
										>
											{/* <button className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"> */}
									{/*	Back
											{/* </button> */}
									{/*</Link>
									</div> */}
								</div>
								<div className="col-8">
									<h5>
										{guideDetails.firstName}{' '}
										{guideDetails.lastName},{' '}
										{guideDetails.city}
									</h5>

									<p>{guideDetails.bio}</p>
								</div>
								<div className="col-11">
									<hr />
								</div>
							</div>
						</>
					)}
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5">
					<div className="col-11">
						{guideDetails && (
							<>
								<ReviewList guide={guideDetails} />
								{currentUser && currentUser.role === '1' && (
									<AddReview ids={ids} />
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default GuideDetails;
