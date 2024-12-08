import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin, googleLogin, setUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome Back!",
          // text: "Let's warm Peoples Heart Together.",
          imageUrl: "https://i.ibb.co.com/jJq2pkf/smile-imoji.webp",
          imageHeight: 200,
          imageAlt: "Custom image",
        });

        const redirectTo = location.state?.from || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password",
        });
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleLogin().then((data) => {
      // console.log(data.user)
      const name = data.user.displayName;
      const email = data.user.email;
      const photo = data.user.photoURL;
      const newUser = {name, email, photo}
      console.log(newUser)
      //save user in DB
      fetch("https://crowdcube-server-seven.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You have Registered Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            //   console.log('user collection to db', data)
          }
        });

        
        //  update profile
         profileUpdate(name, photo)
         .then(() => {
             setUser((prevUser) => {
                 return {...prevUser, displayName: name, photoURL: photo }
             })
         })

      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    });
  };

  return (
    <div className="card  max-w-md lg:max-w-lg mx-auto  shrink-0 my-10">
      <h1 className="text-center text-5xl font-bold  mb-6">Login Now!</h1>
      <form onSubmit={handleLogin} className="card-body shadow-2xl">
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
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary">
            Login with Google
          </button>
        </div>
        <p>
          New to this Website? please{" "}
          <Link to={"/register"} className="text-purple-700">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
