import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-16 my-auto text-black">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#4fa94d"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{from:location.pathname}} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
