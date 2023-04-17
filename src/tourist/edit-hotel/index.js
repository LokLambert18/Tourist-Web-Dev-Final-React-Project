import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { findHotelByIdThunk } from '../thunks/hotels-thunks';
import { updateHotelThunk } from '../thunks/hotels-thunks';
import './index.css';

const EditHotel = () => {
	const { hid } = useParams();
	const dispatch = useDispatch();
	let { hotelsByManager } = useSelector((state) => state.hotels);

	// useEffect(() => {
	// 	console.log('USEEFFECT'); 
	// 	console.log(hid)
	// 	dispatch(findHotelByIdThunk(hid)); 
	// }, []);
	let hotelDetails = hotelsByManager.find((h) => h._id === hid)

	console.log(hotelDetails)

	let [name, setName] = useState(hotelDetails.name);
	let [address, setAddress] = useState(hotelDetails.address);
	let [website, setWebsite] = useState(hotelDetails.website);
	let [phone, setPhone] = useState(hotelDetails.phone);
	let [errorMsg, setError] = useState(null);

	// let [name, setName] = useState('');
	// let [address, setAddress] = useState('');
	// let [website, setWebsite] = useState('');
	// let [phone, setPhone] = useState('');
	
	const saveHotelHandler = () => {
		if (name === '') {
			setError('Enter hotel name');
			return;
		}
		const newHotel = {
			...hotelDetails,
			...{
				name,
				address,
				website,
				phone,
			},
		};
		setError(null);

		console.log('Updating hotel');
		console.log(newHotel);
		dispatch(updateHotelThunk(newHotel));
	};

	return (
		<>
			{/* <LoginTopbar /> */}

			{/* <SearchBar /> */}
			<form>
				<div className="form-group currentUser-info">
					<ul className="list-group m-2">
						<li className="list-group-item border-gray">
							<label className="text-gray">Name</label>

							<div>
								<input
									className="form-control border-0"
									type="text"
									value={name}
									onChange={(event) =>
										setName(event.target.value)
									}
								/>
							</div>
						</li>
					</ul>

					<ul className="list-group m-2">
						<li className="list-group-item border-gray">
							<label className="text-gray">Address</label>

							<div>
								<input
									className="form-control border-0"
									type="text"
									value={address}
									onChange={(event) =>
										setAddress(event.target.value)
									}
								/>
							</div>
						</li>
					</ul>

					<ul className="list-group m-2">
						<li className="list-group-item border-gray">
							<label className="text-gray">Website</label>

							<div>
								<input
									className="form-control border-0"
									type="text"
									value={website}
									onChange={(event) =>
										setWebsite(event.target.value)
									}
								/>
							</div>
						</li>
					</ul>
					<ul className="list-group m-2">
						<li className="list-group-item border-gray">
							<label className="text-gray">Phone number</label>

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
				{errorMsg && <div> {errorMsg}</div>}
				
				<div className="form-group">
					<Link to="/home">
						<button
							type="button"
							className="btn m-2 edit-button rounded-pill float-end"
							onClick={saveHotelHandler}
						>
							save
						</button>
					</Link>
					<Link to="/home">
						<button
							type="button"
							className="btn m-2  edit-button rounded-pill float-end"
						>
							cancel
						</button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default EditHotel;
