import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import ActiveCampaign from "../ActiveCampaign";
import HowItWorks from "./HowItWorks";
import { Typewriter } from "react-simple-typewriter";
import SuccessStories from "./SuccessStories";

const Home = () => {
  const activeCampaigns = useLoaderData();

  return (
    <div className="">
      <div className="w-[94%] mx-auto">
        <Banner />
      </div>
      
   <div className="md:w-[85%] mx-auto my-8 md:my-12 ">
   <h2 className="text-3xl font-bold text-center   mb-4">
          <span className="text-primary">  Explore Running</span> Campaigns
        </h2>
        <p className="text-xl opacity-80 text-center mb-8">
          <Typewriter
            words={[
              "Donate To a Campaign.",
              "Raise a Dreams.",
              "Join a Community of Changemakers.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeCampaigns.map((campaign) => (
          <ActiveCampaign key={campaign._id} campaign={campaign} />
        ))}
      </div>
   </div>

   <HowItWorks/>
   <SuccessStories/>
    </div>
  );
};

export default Home;
