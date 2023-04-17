import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const description = (detLocation) => {
	if (detLocation.info) return detLocation.info.description;
	if (detLocation.wikipedia_extracts)
		return detLocation.wikipedia_extracts.text;
	return 'No description';
};

const LocationItem = ({ detLocation }) => {
	const currentSearch = useSelector((state) => state.login.currentSearch);

	return (
		<>
			<div className="row m-2">
				<div className="col-5">
					{detLocation.preview && (
						<img
							className="img-custom"
							src={`${detLocation.preview.source}`}
							alt="location"
						></img>
					)}
					{!detLocation.preview && (
						<img
							className="img-custom"
							src={`/images/tourist/location.svg`}
							alt="location"
						></img>
					)}
					<div>
						{/* <Link
							to={`/search/${currentSearch}`}
							style={{ textDecoration: 'none' }}
						>
							{/* <button className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"> */}
						{/*}	Back
							{/* </button> */}
						{/*</Link> */}
					</div>
				</div>

				<div className="col-7">
					<h5>
						{/* {JSON.stringify(detLocation)} */}
						{/* <div>{detLocation.xid}</div> */}
						{detLocation.name}, {detLocation.address.state},{' '}
						{detLocation.address.country}
					</h5>
					<p>{description(detLocation)}</p>
					{detLocation.url && (
						<div>
							<a
								target="_blank"
								style={{ textDecoration: 'none' }}
								href={`${detLocation.url}`}
							>
								<i className="bi bi-link-45deg"></i> {' '}
								{detLocation.url}
							</a>
							<span> &emsp; </span>
						</div>
					)}
					{/* <p>Show more at &emsp;</p> */}

					{detLocation.otm && (
						<>
							<a
								target="_blank"
								style={{ textDecoration: 'none' }}
								href={`${detLocation.otm}`}
							>
								OpenTripMap
							</a>
							<span> &emsp; </span>
						</>
					)}
					{detLocation.wikipedia && (
						<>
							<a
								target="_blank"
								style={{ textDecoration: 'none' }}
								href={`${detLocation.wikipedia}`}
							>
								Wikipedia
							</a>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default LocationItem;
