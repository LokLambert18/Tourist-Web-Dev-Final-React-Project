import React from 'react';

const ProfileView = ({
	user = {
		username: 'abc123',
		firstName: 'FirstName',
		lastName: 'LastName',
		country: 'India',
		age: 30,
		image: 'mw.jpg',
		address: 'abc House, Place, Country',
		mobile: 9999999999,
	},
}) => {
	return (
		<>
			<div className="row m-2">
				<div className="col-3">
					<img
						className="rounded-3 img-custom"
						src={`/images/${user.image}`}
						alt="user"
					/>
				</div>
				<div className="col-9">
					<ul className="list-group">
						<li className="list-group-item">
							<span className="fw-bolder">
								{user.firstName} {user.lastName}
							</span>
							<span className="text-gray"> @{user.username}</span>
						</li>
						<li className="list-group-item">{user.address}</li>
						<li className="list-group-item">{user.mobile}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProfileView;
