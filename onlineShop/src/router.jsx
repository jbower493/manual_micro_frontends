import {
    createRootRoute,
    createRoute,
    createRouter,
    Link,
    Outlet,
} from "@tanstack/react-router";
import { createPortal } from "react-dom";

const rootRoute = createRootRoute({
    notFoundComponent: () => null,
});

const baseRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/online-shop",
    component: () =>
        createPortal(
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
            </div>,
            document.getElementById("onlineShopContainer")
        ),
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
