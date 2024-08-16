import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === "ROUTE_CHANGE") {
                router.navigate(window.location.pathname, { replace: true });
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <>
            <RouterProvider router={router} />
            <div>
                Placeholder to prove the welcome app is actually being rendered
            </div>
        </>
    );
}

export default App;
