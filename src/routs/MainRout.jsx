import {
    createBrowserRouter,
  } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Home from "../components/home/Home";
import AddCampaign from "../components/AddCampaign";
import AllCampaigns from "../components/AllCampaigns";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/campaigns",
            element: <AllCampaigns/>,
            loader: () => fetch("http://localhost:5000/campaigns")
        },
        {
            path: "/addCampaigns",
            element:<PrivateRoute>
              <AddCampaign/>
            </PrivateRoute>,
        },
        {
           path: "/login",
           element: <Login/>
        },
        {
            path: "/register",
            element:<Register/>,
        },
        {
            path: "/details",
            element:<PrivateRoute>
              <Details/>
            </PrivateRoute> ,
        },
      ]
    },
  ]);

  export default router