import React, { useState } from "react";
import AllCampaign from "./AllCampaign";
import { useLoaderData } from "react-router-dom";

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
      <h1 className="text-4xl font-bold text-center mb-6">All campaigns</h1>
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
