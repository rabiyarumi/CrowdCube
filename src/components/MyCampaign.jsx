import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaign = ({campaign, index, campaigns, setCampaigns}) => {

    const {_id, title, type, thumbnail, description, deadline, amount, userName, userEmail, isActive} = campaign || {};

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                //delete data from database 
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'DELETE'
                })
                .then((res) => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          const remaining = campaigns.filter(camp => camp._id !== id);
                          setCampaigns(remaining);
                    }
                })

             
            }
          });
    }


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
          <th>
            <Link >Update</Link>
          </th>
          <th>
            <Link onClick={() => handleDelete(_id)} >Delete</Link>
          </th>
        </tr>
        </>
    );
};

export default MyCampaign;