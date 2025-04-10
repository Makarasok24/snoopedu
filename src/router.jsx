import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element: <HomePage />
            }
        ]
    }
])

export default router;