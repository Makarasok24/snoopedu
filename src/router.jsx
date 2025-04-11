import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/course/CoursePage";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import StudentLayout from "./Layouts/StudentLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/course",
                element: <CoursePage />
            }
        ]
    },
    {
        path: "/student/*",
        element: <StudentLayout />,
        children: [
            {
                path: "dashboard",
                element: <StudentDashboard />
            }
        ]
    }
])

export default router;