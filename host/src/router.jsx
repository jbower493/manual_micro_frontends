import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import { OnlineShopLoader } from "./onlineShopLoader";
import { useEffect } from "react";

function RootRoute() {
    useEffect(() => {
        function messageListener(event) {
            // console.log(event);
        }

        window.addEventListener("message", messageListener);

        return () => {
            window.removeEventListener("message", messageListener);
        };
    }, []);

    return (
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
            <footer>Footer</footer>
        </div>
    );
}

export const router = createBrowserRouter([
    {
        element: <RootRoute />,
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
                path: "/online-shop/*",
                element: (
                    <div>
                        <div>Host: /online-shop</div>
                        <OnlineShopLoader />
                    </div>
                ),
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
