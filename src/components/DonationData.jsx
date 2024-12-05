import React from "react";

const DonationData = ({ donation }) => {
  const {
    title,
    type,
    thumbnail,
    description,
    userName,
    userEmail,
    donatedAmount,
    donarAdvise,
  } = donation;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Shoes"
          className="h-60 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Type: {type}</p>
        <h2 className="card-title">Donated Amount: {donatedAmount}</h2>
        <p>Sicker: {userName}</p>

      </div>
    </div>
  );
};

export default DonationData;
