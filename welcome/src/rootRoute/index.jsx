import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function RootRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (!window.routeChangePubSub) {
            return;
        }

        const unsubscribe = window.routeChangePubSub.subscribe(() => {
            console.log(window.location.pathname);
            navigate(window.location.pathname, { replace: true });
        });

        return unsubscribe;
    }, []);

    return <Outlet />;
}
