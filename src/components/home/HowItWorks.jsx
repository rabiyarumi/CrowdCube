import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Campaign",
      info: "Set your goal, tell your story, and launch your campaign.",
    },
    {
      id: 2,
      title: "Attract Backers",
      info: "Share your campaign link and get support from the community.",
    },
    {
      id: 3,
      title: "Achieve Your Goal",
      info: "Reach your funding goal and bring your idea to life!",
    },
  ];

  return (
    <section className=" py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title with Typewriter */}
        <h2 className="text-3xl font-bold   mb-4">
          How <span className="text-primary">Crowdfunding</span> Works
        </h2>
        <p className="text-xl text-gray-600 mb-8">
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
                <img src="" alt="Shoes" className="rounded-full h-36 w-36" />
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
          <button className="btn btn-primary btn-wide">
            Start Campaign Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
