import React from 'react';
import AllCampaign from './AllCampaign';

const AllCampaigns = () => {
    return (
        <div>
            All campaigns

            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Serial
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
          <AllCampaign/>

           
            
          </tbody>
         
        </table>
      </div>
        </div>
    );
};

export default AllCampaigns;