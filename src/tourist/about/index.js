import React from 'react';

const About = () => {
	return (
		<>
			<div className="row m-2">
				{/* <div className="col-1"></div> */}
				<div className="col-11">
					<hr />
				</div>
				<div className="col-1"></div>
			</div>
			<div className="row m-2">
				<div className="col-3 d-sm-3 col-md-3 d-lg-none d-xl-none"></div>
				<div className="col-4">
					<img
						className="img-custom"
						src={`/images/tourist/logo.png`}
						alt="hotel"
					></img>
				</div>
				<div className="d-none d-sm-none d-lg-block col-lg-7 col-xl-7 mt-auto mb-auto">
					<div className="list-group ">
						<ul>
							<li>
								Find locations, hotels, and guides in any city
							</li>
							<li>Review locations, hotels and guides</li>
							<li>Contact guides and hotel managers</li>
							<li>Connect with other tourists</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row m-2">
				{/* <div className="col-1"></div> */}
				<div className="col-11">
					<hr />
				</div>
				<div className="col-1"></div>
			</div>
		</>
	);
};

export default About;
