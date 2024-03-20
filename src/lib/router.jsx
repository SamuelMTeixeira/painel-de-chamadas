import authHook from "@/hooks/useAuth";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import { createBrowserRouter, redirect } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: async () => {
            const { isAuthenticated } = authHook()

            if (!isAuthenticated) {
                console.warn('Usuário não autenticado')
                return redirect("/login");
            }

            return null
        },
    },
    {
        path: "/login",
        element: <Settings />
    }
]);

export default router;