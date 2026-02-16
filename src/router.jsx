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
import TransactionsPage from './pages/Finance/TransactionsPage';
import InvoicesPage from './pages/Finance/InvoicesPage';
import RefundsPage from './pages/Finance/RefundsPage';
import TeacherPayoutsPage from './pages/Finance/TeacherPayoutsPage';
import CouponsPage from './pages/Finance/CouponsPage';
import ReportsPage from './pages/Finance/ReportsPage';
import Chat from './pages/Chat/Chat';
import BookingAnalytics from './pages/Bookings/BookingAnalytics';
import BookingList from './pages/Bookings/BookingList';
import SettingsPage from './pages/Settings/Settings';


import Login from './pages/Auth/Login';


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
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
                path: "finance/transactions",
                element: <TransactionsPage />,
            },
            {
                path: "finance/invoices",
                element: <InvoicesPage />,
            },
            {
                path: "finance/refunds",
                element: <RefundsPage />,
            },
            {
                path: "finance/payouts",
                element: <TeacherPayoutsPage />,
            },
            {
                path: "finance/coupons",
                element: <CouponsPage />,
            },
            {
                path: "finance/reports",
                element: <ReportsPage />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
            {
                path: "bookings/analytics",
                element: <BookingAnalytics />,
            },
            {
                path: "bookings/list",
                element: <BookingList />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
        ],
    },

]);

export default router;
