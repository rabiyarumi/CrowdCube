import React, { useState } from "react";
import AllCampaign from "./AllCampaign";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllCampaigns = () => {
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);

//  console.log(amount)

 const handleSort = () => {

     const sortedData = [...campaigns].sort((a,b) => a.amount - b.amount);
     setCampaigns(sortedData)

 }

  return (
    <div className="w-full md:w-[85%] mx-auto my-10 data-theme:dark "  >
      <h2 className="text-3xl font-bold text-center  mb-4">
          All <span className="text-primary">Campaigns</span> 
        </h2>

        <p className="text-xl text-center opacity-80 ">
          <Typewriter
            words={[
              "Here are all Campaign.",
              "Donate on a Campaign.",
              "On Invest to be a part of their Family.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      <div className="flex justify-end my-6">
      <button onClick={handleSort} className="btn btn-primary ">Sort</button>

      </div>
      <div className="overflow-x-scroll">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Fund Name</th>
              <th>Min-amount</th>
              <th>Deadline</th>
              
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <AllCampaign
                key={campaign._id}
                index={index}
                campaign={campaign}
                setCampaigns={setCampaigns}
              ></AllCampaign>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaigns;
