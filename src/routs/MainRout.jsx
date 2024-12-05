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
import MyDonation from "../components/MyDonation";
import MyCampaign from "../components/MyCampaign";

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
            path: "/campaigns/:id",
            element:<PrivateRoute>
              <Details/>
            </PrivateRoute> ,
            loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
        },
        {
            path: "/donations/:email",
            element:<PrivateRoute>
              <MyDonation/>
            </PrivateRoute> ,
            loader: ({params}) => fetch(`http://localhost:5000/donations/${params.email}`)
        },
        {
          path: "/myCampaign",
          element: <PrivateRoute>
            <MyCampaign/>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router