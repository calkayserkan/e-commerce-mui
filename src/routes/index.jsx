import {createBrowserRouter} from "react-router-dom";
import Header from "../components/layout/header/Header"
import HomePage from "../pages/home/HomePage"
import NotFound from "../pages/notFound/NotFound"
import ShopPage from "../pages/shop"

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Header />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path:'/shop',
                element:<ShopPage/>
            },
            {
                path:'*',
                element: <NotFound />
            }
            
        ],
    },
    // {
    //     path:'/login',
    //     children: [
    //         {
    //             index: true,
    //             element: <Login />
    //         },
    //     ],
    // },
    // {
    //     path:'/register',
    //     children: [
    //         {
    //             index: true,
    //             element: <Register />
    //         },
    //     ],
    // },
    
])

export default routes