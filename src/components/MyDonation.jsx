import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationData from './DonationData';

const MyDonation = () => {
    const donations = useLoaderData()
    
    return (
       <div className='w-[85%] mx-auto my-8'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            donations.map(donation => <DonationData key={donation._id} donation={donation}></DonationData>
            )
           }
        </div>
       </div>
    );
};

export default MyDonation;