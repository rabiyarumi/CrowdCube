import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const AddCampaign = () => {
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddCampaign = e => {
        e.preventDefault();
        const form = e.target;
        
        const title = form.title.value;
        const type = form.type.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const deadline = startDate.toLocaleDateString();
        const amount = form.amount.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        // .toLocaleDateString("en-GB")
        //check if the campaing is active 
        const currentDate = new Date();
        const deadlineDate = new Date(startDate);
        const isActive = deadlineDate >= currentDate;


      const newCampaign = {title, type, thumbnail, description, deadline, amount, userName, userEmail, isActive};

      //send data to server
      fetch("https://crowdcube-server-seven.vercel.app/campaigns", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newCampaign)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Campaign Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    

  return (
    <div className="w-[85%] mx-auto my-4 md:mt-10">
       <h2 className="text-3xl font-bold text-center  mb-4">
          All <span className="text-primary">New Campaigns</span> 
        </h2>

        <p className="text-xl text-center opacity-80 ">
          <Typewriter
            words={[
              "Add a Campaign.",
              "For free donation.",
              "Or find a Investor.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      <form onSubmit={handleAddCampaign} className="md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-8">
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Campaign title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Campaign type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Type</span>
          </label>
          <select className="input input-bordered " name="type" id="type">
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
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="deadline" className="input input-bordered w-full"/>
          
        </div>
        {/* amount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  md:w-1/2">Min-amount</span>
          </label>
          <input
            type="number"
            name="amount"
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

export default AddCampaign;
