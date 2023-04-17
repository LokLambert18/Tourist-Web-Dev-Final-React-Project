import React from "react";

const LocationListItem = (
    { location = { name: 'Red Fort', place: 'Delhi', image: 'redfort.png'} }
    ) => {
 return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <img height={40} width={40} className="rounded-3" src={`/images/${location.image}`}/>
            </div>
            <div className="col-8">
                <div className="fw-bold">
                    <a className="location-name no-decoration" href="#">
                        {location.name}, {location.place}
                    </a>
                </div>
            </div>
        </div>
    </li>
 );
};

export default LocationListItem;
