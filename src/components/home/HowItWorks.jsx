import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import Lottie from "react-lottie-player";

import animation from "./img/Animation-7.json";
import animation2 from "./img/Animation-4.json";
import animation3 from "./img/Animation-5.json";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Campaign",
      info: "Set your goal, tell your story, and launch your campaign.",
      image: animation,
    },
    {
      id: 2,
      title: "Attract Backers",
      info: "Share your campaign link and get support from the community.",
      image: animation2,
    },
    {
      id: 3,
      title: "Achieve Your Goal",
      info: "Reach your funding goal and bring your idea to life!",
      image: animation3,
    },
  ];

  return (
    <section className=" py-16 px-6 md:w-[85%] mx-auto">
      <div className=" mx-auto text-center">
        {/* Title with Typewriter */}
        <h2 className="text-3xl font-bold   mb-4">
          How <span className="text-primary">Crowdfunding</span> Works
        </h2>

        <p className="text-xl opacity-80 mb-8">
          <Typewriter
            words={[
              "Start a Campaign.",
              "Fund Your Dreams.",
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

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              data-tooltip-id={`tooltip-${step.id}`}
              data-tooltip-content={step.info}
              className="card bg-base-100   shadow-xl"
            >
              <figure className="px-4 pt-6 ">
                <Lottie
                  animationData={step.image}
                  style={{ width: 300, height: 300 }}
                  loop={true}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{step.title}</h2>
                <p>{step.info.split(" ").slice(0, 6).join(" ")}...</p>
              </div>
            </div>
          ))}
        </div>

        {/* React Tooltip */}
        {steps.map((step) => (
          <ReactTooltip
            key={step.id}
            id={`tooltip-${step.id}`}
            place="top"
            effect="solid"
          />
        ))}

        {/* Call-to-Action */}
        <div className="mt-8">
          <Link to={"/addCampaigns"} className="btn btn-primary btn-wide">
            Start Campaign Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
