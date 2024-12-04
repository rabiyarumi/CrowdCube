import {
    createBrowserRouter,
  } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Home from "../components/home/Home";
import AddCampaign from "../components/AddCampaign";
import AllCampaigns from "../components/AllCampaigns";
import Login from "../components/Login";
import Register from "../components/Register";

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
        },
        {
            path: "/addCampaigns",
            element:<AddCampaign/>,
        },
        {
           path: "/login",
           element: <Login/>
        },
        {
            path: "/register",
            element:<Register/>,
        },
      ]
    },
  ]);

  export default router