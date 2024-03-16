import {createBrowserRouter} from "react-router-dom";
// import Header from "../components/layout/header/Header"
import HomePage from "../pages/home/HomePage"
import NotFound from "../pages/notFound/NotFound"
import ShopPage from "../pages/shop/ShopPage"
import Contact from "../pages/contact/Contact";
import CartPage from "../pages/cart/CartPage";
import Auth from "../pages/auth/Auth";
import MainLayout from "../layout/homeLayout/MainLayout";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
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
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<CartPage/>
            },
            {
                path:'/blog-details',
                element:<CartPage/>
            },
            {
                path:'/product-details',
                element:<CartPage/>
            },
            {
                path:'/auth',
                element:<Auth />
            },
            {
                path:'*',
                element: <NotFound />
            }
            
        ],
    },
    
])

export default routes