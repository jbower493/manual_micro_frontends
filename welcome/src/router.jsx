import { createBrowserRouter, Outlet } from "react-router-dom";
import { Welcome } from "./welcome";
import { RootRoute } from "./rootRoute";

export const router = createBrowserRouter([
    {
        element: <RootRoute />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        <div>Slash route</div>
                        <Outlet />
                    </div>
                ),
            },
            {
                path: "/welcome",
                element: <Welcome />,
                children: [
                    {
                        path: "one",
                        element: <div>One</div>,
                    },
                    {
                        path: "two",
                        element: <div>Two</div>,
                    },
                ],
            },
        ],
    },
]);
