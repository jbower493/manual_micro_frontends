import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "./welcome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Aint nothing found 404</div>,
    },
    {
        path: "/welcome",
        element: <Welcome />,
    },
]);
