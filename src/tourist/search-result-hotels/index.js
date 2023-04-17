import React from 'react';
import HotelCardSet from './hotel-card-set';
import HotelItem from './hotel-item';
import { useSelector } from 'react-redux';

const HotelList = () => {
	const currentSearch = useSelector((state) => state.login.currentSearch);
	const { hotelsByCity, loading } = useSelector((state) => state.hotels);

	return (
		<>
			{currentSearch && (
				<>
					<div className="col-11">
						<hr />
					</div>
					<h5>
						<span>Hotels near {currentSearch}</span>
					</h5>

					{loading && <h5>loading...</h5>}
					{!loading && !hotelsByCity && <h5>No hotels found.</h5>}
					{!loading && hotelsByCity && hotelsByCity.length === 0 && (
						<h5>No hotels found.</h5>
					)}
					{hotelsByCity && hotelsByCity.length > 0 && (
						<>
							{/* <span className="float-end">
								<a
									href="home"
									className="no-decoration"
								>
									view all
								</a>
							</span> */}
							{/* <HotelCardSet hotels={hotelsByCity} /> */}
							<ul
								className="list-group"
								style={{ width: '85%' }}
							>
								{hotelsByCity.map((hotel) => (
									<HotelItem
										key={hotel._id}
										hotel={hotel}
									/>
								))}
							</ul>{' '}
						</>
					)}

					<div className="col-11">
						<hr />
					</div>
				</>
			)}

			{/* {!currentSearch && <h5>Enter a city or place to search.</h5>} */}
		</>
	);
};

export default HotelList;
