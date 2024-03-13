import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages";
import MasterLayout from "../layouts/MasterLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
]);

export default router;