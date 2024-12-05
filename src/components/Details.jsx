import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const campaign = useLoaderData();
  console.log(campaign);
  const {
    title,
    type,
    thumbnail,
    description,
    deadline,
    amount,
    userName,
    userEmail,
    isActive,
  } = campaign;

  return (
    <div className="w-[85%] mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row">


          <div className="card card-compact bg-base-100 ">
            <figure>
              <img
                src={thumbnail}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <h2 className="card-title">Deadline: {deadline}</h2>
              <h2 className="card-title">Amount: {amount}</h2>

              
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donation Amount</span>
                </label>
                <input
                  type="number"
                  name="donatedAmount"
                  placeholder="Donation Amount"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Say something</span>
                </label>
                <input
                  type="text"
                  placeholder="say something"
                  className="input input-bordered"
                  
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Donate Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
