import {
    createBrowserRouter,
  } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Home from "../components/home/Home";
import AddCampaign from "../components/AddCampaign";
import AllCampaigns from "../components/AllCampaigns";

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
      ]
    },
  ]);

  export default router