import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const MyCreatedRouter = createBrowserRouter([

    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/news.json')
            },

            {
                path : '/news/:id',
                element : <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader : () => fetch('/news.json')
            },

            {
                path : '/register',
                element : <Register></Register>
            },

            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }

])

export default MyCreatedRouter;