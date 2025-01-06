import React from "react";
import { Link } from "react-router-dom";

const AllCampaign = ({campaign, setCampaigns, index}) => {
    const {_id, title, thumbnail, deadline, amount, description, type} = campaign || {};

   return (
    
    <div className="card card-compact bg-base-100  shadow-xl">
    <figure>
      <img
        src={thumbnail}
        className="h-48"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description.slice(0, 40)}....</p>
      <p className="font-bold"> End in : {deadline}</p>
      <div className="card-actions justify-end">
      <Link to={`/campaign/${_id}`} className="btn btn-primary btn-sm">details</Link>
      </div>
    </div>
  </div>
           
            
        
         
  
  );
};

export default AllCampaign;

