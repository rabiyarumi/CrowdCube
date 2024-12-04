import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { userRegister, profileUpdate, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = {name, email, photo}

     //password validation
     if (password.length < 6) {
        setErrorMessage("password must be 6 character or more");
        return;
      }
      if (!/^(?=.*[A-Z]).*$/.test(password)) {
        setErrorMessage("password must must contain 1 uppercase letter");
        return;
      }
      if (!/^(?=.*[a-z]).*$/.test(password)) {
        setErrorMessage("password must must contain 1 lowercase letter");
        return;
      }

    userRegister(email, password)
    .then(result => {

        //save user in DB
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
           
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   console.log('user collection to db', data)
            }
        })


         //update profile
         profileUpdate(name, photo)
         .then(() => {
             setUser((prevUser) => {
                 return {...prevUser, displayName: name, photoURL: photo }
             })
         })

         navigate("/");
    })
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "email already in use ",
          });
        console.log(error)
    })
  }


  return (
    <div className="card  max-w-md lg:max-w-lg mx-auto  shrink-0 my-10">
      <h1 className="text-center text-5xl font-bold  mb-6">
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

    {/* error massage */}
    <div className="text-sm ml-2 mt-1 opacity-85">
            {errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <p className="">
                Make sure your password contain 6 character including 1
                uppercase & 1 lowercase letter.
              </p>
            )}
          </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>
          Already have an account? please{" "}
          <Link to={"/login"} className="text-purple-700"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
