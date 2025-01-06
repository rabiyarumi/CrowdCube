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
import MyCampaigns from "../components/MyCampaigns";
import UpdateCampaign from "../components/UpdateCampaign";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader:() => fetch("https://crowdcube-server-seven.vercel.app/activeCampaigns")
        },
        {
            path: "/campaigns",
            element: <AllCampaigns/>,
            loader: () => fetch("https://crowdcube-server-seven.vercel.app/campaigns")
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
            path: "/faq",
            element:<FAQ/>,
        },
        {
            path: "/about",
            element:<AboutUs/>,
        },
        {
            path: "/campaign/:id",
            element:
              <Details/>
            ,
            loader: ({params}) => fetch(`https://crowdcube-server-seven.vercel.app/campaign/${params.id}`)
        },
        {
            path: "/updateCampaign/:id",
            element:<PrivateRoute>
            <UpdateCampaign/>
            </PrivateRoute> ,
            loader: ({params}) => fetch(`https://crowdcube-server-seven.vercel.app/campaign/${params.id}`)
        },
        {
            path: "/donations/:email",
            element:<PrivateRoute>
              <MyDonation/>
            </PrivateRoute> ,
            loader: ({params}) => fetch(`https://crowdcube-server-seven.vercel.app/donations/${params.email}`)
        },
        {
          path: "campaigns/:email",
          element: <PrivateRoute>
            <MyCampaigns/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://crowdcube-server-seven.vercel.app/campaigns/${params.email}`)
        }
      ]
    },
  ]);

  export default router