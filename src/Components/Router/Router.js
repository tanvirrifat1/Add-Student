import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/Signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

        ]
    }
])