import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LoginPage from "./pages/auth/login/login";
const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" />
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    );
}

export default App