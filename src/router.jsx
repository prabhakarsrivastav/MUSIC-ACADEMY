import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Dashboard2 from './pages/Dashboard/Dashboard2';
import Analytics from './pages/Analytics/Analytics';
import UsersList from './pages/Users/UsersList';
import TeachersList from './pages/Teachers/TeachersList';
import ResourcesList from './pages/Resources/ResourcesList';
import ReviewsList from './pages/Reviews/ReviewsList';
import TeacherProfile from './pages/Teachers/TeacherProfile';
import LessonManagement from './pages/Lessons/LessonManagement';
import FinanceDashboard from './pages/Finance/FinanceDashboard';
import Chat from './pages/Chat/Chat';


const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "dashboard2",
                element: <Dashboard2 />,
            },
            {
                path: "analytics",
                element: <Analytics />,
            },
            {
                path: "users",
                element: <UsersList />,
            },
            {
                path: "teachers",
                element: <TeachersList />,
            },
            {
                path: "teachers/profile",
                element: <TeacherProfile />,
            },
            {
                path: "resources",
                element: <ResourcesList />,
            },
            {
                path: "reviews",
                element: <ReviewsList />,
            },
            {
                path: "lessons",
                element: <LessonManagement />,
            },
            {
                path: "finance",
                element: <FinanceDashboard />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
        ],
    },

]);

export default router;
