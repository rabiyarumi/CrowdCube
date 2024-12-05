import React from "react";

const AllCampaign = ({campaign, setCampaigns, index}) => {
    const {title, thumbnail, deadline, amount, type} = campaign;

   return (
    
          <>
            {/* row 1 */}
            <tr>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex  items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={thumbnail}
                        alt="Fund thumbnail"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50">{type}</div>
                  </div>
                </div>
              </td>
              <td>
                {amount}
                
              </td>
              <td>
                {deadline}
                
              </td>
              <td><button className="btn btn-ghost btn-xs">Update</button></td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            </>
           
            
        
         
  
  );
};

export default AllCampaign;
