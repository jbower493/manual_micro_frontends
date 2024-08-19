import { createBrowserRouter, Link, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: (
            <div>
                <header>
                    Header
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/online-shop">Online Shop</Link>
                        <Link to="/store-locator">Store Locator</Link>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        ),
        children: [
            {
                path: "/",
                element: <div>Host: /</div>,
            },
            {
                path: "/about",
                element: <div>Host: /about</div>,
            },
            {
                path: "/online-shop",
                element: <div id="onlineShopContainer">Host: /online-shop</div>,
            },
            {
                path: "/store-locator",
                element: (
                    <div id="storeLocatorContainer">Host: /store-locator</div>
                ),
            },
        ],
    },
]);
