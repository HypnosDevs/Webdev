import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx"
import Shop from "../pages/Shop.jsx"
import About from "../pages/About.jsx"
import Blog from "../pages/Blog.jsx"
import SingleBook from "../pages/SingleBook.jsx";
import Dashboard from "../dashboards/Dashboard.jsx";
import DashboardLayout from "../dashboards/DashboardLayout.jsx";
import CreateBook from "../dashboards/createBook.jsx";
import Managebook from "../dashboards/Managebook.jsx";
import Editbook from "../dashboards/Editbook.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import PrivateRoute from "../PrivateRouting/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/book/:id',
                element: <SingleBook />,
                //why can't use axios?
                loader: ({ params }) => fetch(`http://localhost:5678/books/detailBooks/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: "/admin/dashboard/createbook",
                element: <CreateBook />
            },
            {
                path: "/admin/dashboard/managebook",
                element: < Managebook />
            },
            {
                path: "/admin/dashboard/editbook/:id",
                element: <Editbook />,
                loader: ({ params }) => fetch(`http://localhost:5678/books/detailBooks/${params.id}`)
            },
        ]
    }, {
        path: "signup",
        element: <Signup />
    }, {
        path: "login",
        element: <Login />
    }, {
        path: "logout",
        element: <Logout />
    }
]);

export default router;