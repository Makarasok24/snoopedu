import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/course/CoursePage";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";

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
            },
            {
                path: "/student-dashboard",
                element: <StudentDashboard />
            }
        ]
    }
])

export default router;