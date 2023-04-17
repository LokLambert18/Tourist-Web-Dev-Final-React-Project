import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReviewList from './review-list';
import RequestList from './request-list';
import AddReview from './add-review';
import SearchBar from '../search-bar';
import LoginTopbar from '../navigation-topbar';
import { Link } from 'react-router-dom';

import { findHotelByIdThunk } from '../thunks/hotels-thunks';
import { addHotelRequestThunk } from '../thunks/hotels-thunks';

const HotelDetails = () => {
	const { hid } = useParams();
	const { hotelDetails, loading, requested } = useSelector(
		(state) => state.hotels
	);
	const currentSearch = useSelector((state) => state.login.currentSearch);

	let { currentUser } = useSelector((state) => state.login);
	let ids = {};

	let role = '1';
	if (currentUser) {
		role = currentUser.role;
	}

	let back = '';
	if (role === '3') {
		back = `/home/my-hotels`;
	} else {
		back = `/search/${currentSearch}`;
	}

	const handleRequestButton = () => {
		const request = {
			hId: hid,
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
		dispatch(addHotelRequestThunk(request));
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(findHotelByIdThunk(hid));
	}, []);

	if (currentUser && hotelDetails) {
		ids = {
			author: currentUser,
			hotel: hotelDetails,
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
					{hotelDetails && (
						<>
							<div className="row m-2">
								<div className="col-6">
									<h5> Hotel Details </h5>
								</div>

								<div className="col-11">
									<hr />
								</div>
								<div className="col-4">
									<img
										className="img-custom"
										src={`/images/tourist/hotel.png`}
										alt="hotel"
									></img>
									{/* <div>
										<Link
											to={`${back}`}
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
										{hotelDetails.name}, {hotelDetails.city}
									</h5>
									<div class="form-group row">
										<label
											for="address"
											className="col-sm-4 col-form-label text-gray"
										>
											Address:
										</label>
										<div class="col-sm-8">
											<input
												type="text"
												readonly=""
												class="form-control-plaintext"
												id="staticEmail"
												value={hotelDetails.address}
											/>
										</div>
									</div>
									<div class="form-group row">
										<label
											for="Website"
											className="col-sm-4 col-form-label text-gray"
										>
											Website:
										</label>
										<div class="col-sm-8">
											<input
												type="text"
												readonly=""
												class="form-control-plaintext"
												id="staticEmail"
												value={hotelDetails.website}
											/>
										</div>
									</div>
									<div class="form-group row">
										<label
											for="phone"
											className="col-sm-4 col-form-label text-gray"
										>
											Phone:
										</label>
										<div class="col-sm-8">
											<input
												type="text"
												readonly=""
												class="form-control-plaintext"
												id="staticEmail"
												value={hotelDetails.phone}
											/>
										</div>
									</div>
								</div>
								<div className="col-11">
									<hr />
								</div>
							</div>
						</>

						// <HotelItem
						// 	key={detHotel.xid}
						// 	detHotel={detHotel}
						// />
					)}
				</div>
				<div className="d-xs-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5">
					<div className="col-11">
						{hotelDetails && (
							<>
								<ReviewList hotel={hotelDetails} />
								{currentUser && currentUser.role === '1' && (
									<AddReview ids={ids} />
								)}
							</>
						)}
						{hotelDetails && role === '3' && (
							<>
								<RequestList hotel={hotelDetails} />
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default HotelDetails;
