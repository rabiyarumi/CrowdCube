import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { userRegister } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = {name, email, photo, password}

    userRegister(email, password)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error)
    })
  }


  return (
    <div className="card  max-w-md lg:max-w-lg mx-auto  shrink-0 ">
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">
        Register Now!
      </h1>
      <form onSubmit={handleRegister} className="card-body shadow-2xl">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>
          Already have an account? please{" "}
          <Link to={"/login"} className="text-purple-700">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
