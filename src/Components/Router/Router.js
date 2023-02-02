import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import ContactEdit from "../Pages/Contact/ContactEdit";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Inbox from "../Pages/Message/Inbox/Inbox";
import Message from "../Pages/Message/Message";
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
                path: '/edit/:id',
                element: <ContactEdit />,
                loader: ({ params }) => fetch(`http://localhost:5000/allStudents/${params.id}`)
            },


        ]
    },
    {
        path: '/message',
        element: <PrivateRoute><Message></Message></PrivateRoute>,
        children: [
            {
                path: '/message',
                element: <Inbox></Inbox>
            },
            {
                path: '/message/contact',
                element: <Contact></Contact>
            },
        ]
    }
])