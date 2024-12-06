import React from "react";
import { Link } from "react-router-dom";

const ActiveCampaign = ({ campaign }) => {

    const {_id, title, type, thumbnail, description, amount, deadline, } = campaign || {};

  return (
    <div className="card bg-base-100 image-full  shadow-xl h-60">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" 
      className="h-60 w-full"
      />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}!</h2>
    <p>Min-Amount: {amount}</p>
    <p>Deadline: {deadline}</p>
    <div className="card-actions ">
      <Link to={`/campaign/${_id}`} className="btn btn-primary">See More</Link>
    </div>
  </div>
</div>
  );
};

export default ActiveCampaign;
