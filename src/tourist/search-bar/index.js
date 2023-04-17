import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchUpdate } from '../reducers/user-reducer';
import { findLocationsbyCityThunk } from '../thunks/locations-by-city-thunks';
import { findGuidesByCityThunk } from '../thunks/guides-by-city-thunks';
import { findHotelsByCityThunk } from '../thunks/hotels-thunks';
import { useParams } from 'react-router';
import LoginTopbar from '../navigation-topbar';


const SearchComponent = () => {
	const { cid } = useParams();

	const dispatch = useDispatch();
	// const currentSearch = useSelector((state) => state.login.currentSearch);
	let [city, setCity] = useState(cid ? cid : '');

	console.log("In SearchComponent -- > cid")
	console.log(cid)


	useEffect(() => {
		console.log('City');
		console.log(cid);
		dispatch(searchUpdate(cid));
		dispatch(findLocationsbyCityThunk(cid));
		dispatch(findGuidesByCityThunk(cid));
		dispatch(findHotelsByCityThunk(cid));
	}, []);

	const searchClickHandler = () => {
		console.log('City');
		console.log(city);
		dispatch(searchUpdate(city));
		dispatch(findLocationsbyCityThunk(city));
		dispatch(findGuidesByCityThunk(city));
		dispatch(findHotelsByCityThunk(city));
	};

	return (
		<>
			<LoginTopbar />

			<div className="row m-5">
				<div className="col-2 col-md-2 col-lg-1 col-xl-2 "></div>
				<div
					className="col-10 col-md-10 col-lg-7 col-xl-6 "
					style={{ position: 'relative' }}
				>
					{/* <h3> Where would you like to visit?</h3> */}

					
							<form className="search-form">
								<input
									className="search-input"
									type="text"
									value={city}
									placeholder={'where would you like to visit?'}
									onChange={(event) =>
										setCity(event.target.value)
									}
			 					/>
								{/* <input type="email" className="form-control" /> */}
								<Link to={`/search/${city}`}>
									<button
										className="search-button"
										type="submit"
										onClick={searchClickHandler}
									>
										Go
									</button>
								</Link>
							</form>
					
				</div>
				<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"></div>
			</div>
		</>
	);
};

export default SearchComponent;
