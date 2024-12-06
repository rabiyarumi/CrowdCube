import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';


const UpdateCampaign = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const Navigate = useNavigate()

    const {_id, title, type, thumbnail, description, amount, } = data || {};


    console.log(data)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        
        const title = form.title.value;
        const type = form.type.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const deadline = startDate.toLocaleDateString("en-GB");
        const amount = form.amount.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

          //check if the campaing is active 
          const currentDate = new Date();
          const deadlineDate = new Date(startDate);
          const isActive = deadlineDate >= currentDate;
  
        const updatedCampaign = {title, type, thumbnail, description, deadline, amount, userName, userEmail, isActive};

        // update data in server
        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Campaign Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  Navigate(-1)
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Nothing to Update",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })



    }
    return (
         <div className="w-[85%] mx-auto my-4 md:mt-10">
        <h1 className="md:text-4xl text-xl font-bold text-center">Add New Campaign</h1>
      <form onSubmit={handleUpdate} className="md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-8">
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Campaign title</span>
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Campaign title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Campaign type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Campaign type</span>
          </label>
          <select className="input input-bordered " name="type" defaultValue={type} id="type">
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="medical-emergency">Medical emergency</option>
                <option value="personal-issue">Personal issue</option>
                <option value="creative-ideas">Creative ideas</option>
              </select>
        </div>
        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Thumbnail</span>
          </label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={thumbnail}
            placeholder="image/thumbnail"
            className="input input-bordered"
            required
          />
        </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Description</span>
          </label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            placeholder="description"
            className="input input-bordered"
            required
          />
        </div>
        {/* Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Deadline</span>
          </label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="deadline"  className="input input-bordered w-full"/>
          
        </div>
        {/* amount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Minimum donation amount</span>
          </label>
          <input
            type="number"
            name="amount"
            defaultValue={amount}
            placeholder="Minimum amount"
            className="input input-bordered"
            required
          />
        </div>
        {/* user Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">User Name</span>
          </label>
          <input
            type="text"
            name="userName"
            value={user.displayName}
            className="input input-bordered"
            required
          />
        </div>

        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Email</span>
          </label>
          <input
            type="email"
            name="userEmail"
            value={user.email}
            className="input input-bordered"
            required
          />
        </div>
       
        <div className="form-control mt-4 md:col-span-2">
          <button className="btn btn-primary">Add Campaign</button>
        </div>
        </div>
      </form>
    </div>
    );
};

export default UpdateCampaign;