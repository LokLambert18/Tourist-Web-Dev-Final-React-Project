import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteHotelThunk, findHotelByIdThunk } from '../thunks/hotels-thunks';

const HotelItem = ({ hotel }) => {
	const dispatch = useDispatch();

	const deleteHotelHandler = () => {
		console.log('deleting hotel');
		console.log(hotel._id);
		dispatch(deleteHotelThunk(hotel._id));
	};

	const editHotelHandler = () => {
		console.log('edit hotel');
		console.log(hotel._id);
		dispatch(findHotelByIdThunk(hotel._id));
	};

	return (
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img
						height={40}
						width={40}
						className="rounded-circle"
						src={`/images/tourist/hotel.png`}
						alt="hotel"
					/>
				</div>
				<div className="col-8">
					<Link
						to={`/hotel/${hotel._id}`}
						style={{ textDecoration: 'none' }}
					>
						{hotel.name},
						<span className="text-gray"> {hotel.city}</span>
					</Link>
					{/* <div>{review.text}</div> */}
				</div>
				<div className="col-1">
					<Link
						to={`/home/edit-hotel/${hotel._id}`}
						/* <Link to={`/home/edit-hotel`} */
						onClick={editHotelHandler}
					>
						<i className="bi bi-pencil-square "></i>
					</Link>
				</div>
				{/* <div className="col-1">
					<Link
						to={'.'}
						onClick={deleteHotelHandler}
					>
						<i className="bi bi-trash "></i>
					</Link>
				</div> */}
			</div>
		</li>
	);
};

export default HotelItem;
