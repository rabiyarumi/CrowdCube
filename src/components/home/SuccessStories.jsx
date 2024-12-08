import React from "react";
// import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";

// Lottie animation JSON (replace with a relevant animation URL or file)
import successAnimation from "./img/Animation-5.json"; // Use a local JSON file or fetch URL
import { Fade } from "react-awesome-reveal";

const successStories = [
  {
    id: 1,
    name: "Save A Dream",
    amountRaised: "$50,000",
    description:
      "A campaign to preserve biodiversity by saving the Amazon rainforest.",
    image: "https://i.ibb.co.com/MD0WYn0/pexels-canvastudio-3277808.jpg", // Replace with actual campaign image
  },
  {
    id: 2,
    name: "Educate Girls",
    amountRaised: "$30,000",
    description:
      "A project to provide education for underprivileged girls in rural areas.",
    image: "https://i.ibb.co.com/NWKQX1v/pexels-julia-m-cameron-4144036.jpg", // Replace with actual campaign image
  },
  {
    id: 3,
    name: "Help Tina to Servive",
    amountRaised: "$75,000",
    description: "An initiative to remove plastic waste from the oceans.",
    image: "https://i.ibb.co.com/bvvw5t9/pexels-pavel-danilyuk-6753271.jpg", // Replace with actual campaign image
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 ">
      <div className=" mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Inspiring <span className="text-primary">Success Stories</span>
          </h2>
          <p className="opacity-80 text-lg mt-4">
            See how our community has turned dreams into reality!
          </p>
        </div>

        <div className="flex justify-center ">
          <Lottie
            animationData={successAnimation}
            style={{ width: 300, height: 300 }}
            loop={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {successStories.map((story) => (
            <Fade key={story.id} duration={1000} triggerOnce>
              <div className="card card-compact h-96 shadow-xl">
                <figure>
                  <img
                    src={story.image}
                    alt="Shoes"
                    className="h-52 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{story.name}</h2>
                  <p className="text-primary font-bold">
                    {story.amountRaised}
                  </p>
                  <p className="text-gray-600 mt-2">{story.description}</p>
                </div>
              </div>
              
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
