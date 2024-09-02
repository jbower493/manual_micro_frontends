import {
    createRootRoute,
    createRoute,
    createRouter,
    Link,
    Outlet,
    useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React, { useEffect } from "react";

function RootRouteComponent() {
    const location = useLocation();

    console.log("root route rerendered");

    // useEffect(() => {
    //     console.log(location.pathname);
    //     window.postMessage("ROUTE_CHANGE");
    // }, [location.pathname]);

    return (
        <>
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </>
    );
}

const rootRoute = createRootRoute({
    notFoundComponent: () => null,
    component: RootRouteComponent,
});

const baseRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/online-shop",
    component: () => {
        return (
            <div>
                <div>
                    <Link to="/online-shop/products">Products</Link>
                </div>
                <div>
                    <Link to="/online-shop/cart">Cart</Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <p>Online Shop: /online-shop</p>
                <Outlet />
            </div>
        );
    },
});

const productsRoute = createRoute({
    getParentRoute: () => baseRoute,
    path: "products",
    component: () => <div>Online Shop: /online-shop/products</div>,
});

const cartRoute = createRoute({
    getParentRoute: () => baseRoute,
    path: "cart",
    component: () => <div>Online Shop: /online-shop/cart</div>,
});

const routeTree = rootRoute.addChildren([
    baseRoute.addChildren([productsRoute, cartRoute]),
]);

export const router = createRouter({
    routeTree,
});
