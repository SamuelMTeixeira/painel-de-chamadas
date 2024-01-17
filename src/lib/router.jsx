import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/settings",
        element: <Settings />
    }
]);

export default router;