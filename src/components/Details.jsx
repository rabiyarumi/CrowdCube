import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)

  const campaign = useLoaderData();
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
  } = campaign || {};

  const handleDonate = e => {
    e.preventDefault();
    
    const donatedAmount = e.target.donatedAmount.value;
    const donarAdvise = e.target.donarAdvice.value;
    const donarName = user.displayName;
    const donarEmail = user.email;

    const currentDate = new Date();

    const newDonation = {title,
        type,
        thumbnail,
        description,
        deadline,
        amount,
        userName,
        userEmail,
        isActive,
        donatedAmount,
        donarAdvise,
        donarName,
        donarEmail
    }

    if(deadline < currentDate){
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "This Deadline Has been Ended",
        showConfirmButton: false,
        timer: 1500
      });
      return
    }
    else{

      //send data to the server
     fetch("https://crowdcube-server-seven.vercel.app/donations", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDonation)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Have donated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    }

    
    

    // console.log(newDonation)

  }

  return (
    <div className="w-[85%] mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row">


          <div className="card card-compact  ">
            <figure className="h-72 ">
              <img
                src={thumbnail}
                alt="Shoes"
                className="h-full "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <h2 className="text-lg"><span className="text-primary">Type:</span> {type}</h2>
              <h2 className="text-lg"><span className="text-primary">Deadline:</span> {deadline}</h2>
              <h2 className="text-lg"><span className="text-primary">Amount:</span> {amount}</h2>

              
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
            <form onSubmit={handleDonate} className="card-body">
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
                  name="donarAdvice"
                  placeholder="say something"
                  className="input input-bordered"
                  
                />
                
              </div>
              <div className="form-control mt-6">
                <button disabled={!isActive} className="btn btn-primary">Donate Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
