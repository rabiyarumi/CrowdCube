import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const ActiveCampaign = ({ campaign }) => {
  const { _id, title, type, thumbnail, description, amount, deadline } =
    campaign || {};


  return (
    <div className="card bg-base-100  flex-row shadow-xl">
      <figure className="px-4 pt-6 ">
        <img src={thumbnail} alt="Shoes" className="rounded-full h-36 w-36" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{deadline}</p>
        <div className="card-actions">
          <Link
            to={`/campaign/${_id}`}
            id="my-anchor-element"
            className="btn btn-outline btn-sm"
          >
            See More
          </Link>
        </div>
        <Tooltip anchorSelect="#my-anchor-element" content="Click to See More Details" />
      </div>
    </div>
  );
};

export default ActiveCampaign;
