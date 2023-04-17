import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LocationList = () => {
	const { locations, loading } = useSelector((state) => state.locByCity);
	const currentSearch = useSelector((state) => state.login.currentSearch);

	return (
		<>
			{currentSearch && (
				<>
					<h5>
						<span>Locations near {currentSearch}</span>
					</h5>

					{loading && <h5>loading...</h5>}
					{!loading && !locations && (
						<h5>
							No locations found. Enter a city or place to search
							again.
						</h5>
					)}
					{!loading && locations && locations.length === 0 && (
						<h5>
							No locations found. Enter a city or place to search
							again.
						</h5>
					)}
					{locations && locations.length > 0 && (
						<ul className="list-group">
							{locations.map((loc) => (
								<li className="list-group-item">
									<Link
										to={`/location/${loc.xid}`}
										key={loc.xid}
										style={{ textDecoration: 'none' }}
									>
										<div
											className="no-decoration text-black"
											// style={{ paddingLeft: 13 }}
										>
											{loc.name}
										</div>
									</Link>
								</li>
							))}
						</ul>
					)}
				</>
			)}

			{!currentSearch && <h5>Enter a city or place to search.</h5>}
		</>
	);
};

export default LocationList;
