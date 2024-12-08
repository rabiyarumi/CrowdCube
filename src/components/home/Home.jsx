import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import ActiveCampaign from "../ActiveCampaign";
import HowItWorks from "./HowItWorks";

const Home = () => {
  const activeCampaigns = useLoaderData();

  return (
    <div className="">
      <div className="w-[94%] mx-auto">
        <Banner />
      </div>
      
   <div className="w-[85%] mx-auto my-8 md:my-12 ">
   <h1 className="text-center text-2xl md:text-4xl font-bold ">Active Routes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeCampaigns.map((campaign) => (
          <ActiveCampaign key={campaign._id} campaign={campaign} />
        ))}
      </div>
   </div>

   <HowItWorks/>
    </div>
  );
};

export default Home;
