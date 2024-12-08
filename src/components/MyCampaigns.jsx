import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyCampaign from './MyCampaign';

const MyCampaigns = () => {
    const campaignsData = useLoaderData();
    const [campaigns, setCampaigns] = useState(campaignsData);
    // console.log(campaigns)
    return (
        <div className='my-8'>
       <h1 className='text-center text-2xl font-bold'>My Campaign</h1>
       {
        campaigns.length > 0 ? 
        <div className="overflow-x-scroll">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Fund Name</th>
              <th>Min-amount</th>
              <th>Deadline</th>
              
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
                campaigns.map((campaign, idx) => <MyCampaign key={campaign._id} index={idx} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns} ></MyCampaign>)
            }
          </tbody>
        </table>
      </div>
      :
       <div className='mt-8 text-center space-y-4'>
         <p>Looks Like You Didn't Start any Campaign</p>
         <Link to={"/addCampaigns"} className='btn btn-primary'>Add Campaign</Link>
       </div>
       }
       


        
        </div>
    );
};

export default MyCampaigns;