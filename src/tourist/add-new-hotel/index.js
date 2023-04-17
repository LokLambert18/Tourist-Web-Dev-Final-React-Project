import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHotelThunk } from '../thunks/hotels-thunks';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const AddNewHotel = () => {
	let [hotelName, setHotelName] = useState('');
	let [address, setAddress] = useState('');
	let [city, setCity] = useState('');
	let [phone, setPhone] = useState('');
	let [website, setWebsite] = useState('');
	let [errorMsg, setError] = useState(null);
	// let [errorMsg2, setError2] = useState(null);

	// let { added } = useSelector((state) => state.hotels);
	let { currentUser } = useSelector((state) => state.login);

	const dispatch = useDispatch();

	const addClickHandler = () => {
		if (hotelName === '') {
			setError('Enter hotel name');
			return;
		}

		if (city === '') {
			setError('Enter city');
			return;
		}
		// setError1(null);
		setError(null);
		console.log('In dispatch');
		// console.log(added);
		const newHotel = {
			name: hotelName,
			manager: currentUser._id,
			city: city,
			address: address,
			phone: phone,
			website: website,
		};

		dispatch(createHotelThunk(newHotel));
	};

	// console.log(added)

	return (
		<>
			{/* {
				added === 1 &&
					 (<Navigate
						to = {'/home/my-hotels'}
					/>)	
			} */}
			<h5>Add new hotel</h5>
			<div className="col-10">
				<hr />
			</div>
			<div className="row">
				<div className="col-1"></div>
				<div className="col-8">
					<input
						className="form-control mb-2"
						style={{ width: '100%' }}
						id="hotelName"
						type="Text"
						placeholder={'Hotel Name'}
						value={hotelName}
						onChange={(event) => setHotelName(event.target.value)}
					/>

					{/* {errorMsg1 && <div> {errorMsg1}</div>} */}

					<input
						className="form-control mb-2"
						style={{ width: '100%' }}
						id="city"
						type="Text"
						placeholder={'City'}
						value={city}
						onChange={(event) => setCity(event.target.value)}
					/>
					{/* {errorMsg2 && <div> {errorMsg2}</div>} */}
					<input
						className="form-control mb-2"
						style={{ width: '100%' }}
						id="Address"
						type="Text"
						placeholder={'Address'}
						value={address}
						onChange={(event) => setAddress(event.target.value)}
					/>
					<input
						className="form-control mb-2"
						style={{ width: '100%' }}
						id="Phone"
						type="Text"
						placeholder={'Phone Number'}
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
					/>
					<input
						className="form-control mb-2"
						style={{ width: '100%' }}
						id="Website"
						type="Text"
						placeholder={'Website'}
						value={website}
						onChange={(event) => setWebsite(event.target.value)}
					/>
					{errorMsg && <div> {errorMsg}</div>}
					<Link to={'/home'}>
						<button
							className="rounded-pill btn btn-secondary ms-3 me-3 float-end"
							onClick={addClickHandler}
						>
							add
						</button>
					</Link>
					<Link to={'/home'}>
						<button className="rounded-pill btn btn-secondary ms-3  me-3 float-end">
							back
						</button>
					</Link>
				</div>

				{/* {regStatus === -1 && <div>{'hotelName already exists!!'}</div>} */}
			</div>

			<div className="col-10">
				<hr />
			</div>
		</>
	);
};

export default AddNewHotel;
