import React from "react";
import { Typewriter } from "react-simple-typewriter";

const ContactUs = () => {
  return (
    <div id="contact-us" className="py-16 px-6 md:w-[85%] mx-auto">
      <div className="mx-auto text-center">
        {/* Title with Typewriter */}
        <h2 className="text-3xl font-bold   mb-4">
          <span className="text-primary">Contact</span> With Us
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

        {/* ------------------------- */}
        <div className="flex flex-col md:flex-row">
          <form className="card-body md:w-3/5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Massage</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Drop Your Query Here"
              ></textarea>
            </div>{" "}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>

          <div className="flex flex-col justify-center text-start md:pl-8  gap-8 text-xl md:border-l-2 md:border-primary  md:w-2/5">
          <div>
          <h4 className="text-xl font-bold">Contact</h4>
          <p className="opacity-75">crowd.cube@gmail.com</p>
          </div>
          <div>
          <h4 className="text-xl font-bold">Based in</h4>
          <p className="opacity-75">Dhaka, Bangladesh</p>
          </div>
          <div>
          <h4 className="text-xl font-bold">social</h4>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
