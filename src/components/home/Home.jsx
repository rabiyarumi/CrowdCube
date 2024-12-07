import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ActiveCampaign from '../ActiveCampaign';

const Home = () => {
    const activeCampaigns = useLoaderData()

    
    return (
        <div className=''>
           <div className='w-[94%] mx-auto'>
           <Banner/>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%] mx-auto'>
                {
                    activeCampaigns.map(campaign => <ActiveCampaign key={campaign._id} campaign={campaign} />)
                }
            </div>
        </div>
    );
};

export default Home;