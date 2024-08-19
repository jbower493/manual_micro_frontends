# Micro frontends with independent routing

When thinking about using a [micro frontends](https://en.wikipedia.org/wiki/Microfrontend) architecture for a frontend application, there are some complexities that we have to think about, that don't exists when building a monolithic frontend. One of which is, how do we handle client side routing? In a typical monolithic SPA (single page application), there would only be one router which handles all the routes and navigation between them. So considering that we want to use a micro frontends architecture, we could simply have each of our micro frontends use the same router (and same version of that router), and nest the MFE's (micro frontends) as routes, inside a main parent router.

But what if we wanted to have each of our MFE's use different routers, or even different frontend frameworks all together? For example we might want to do this for the following reasons, among others:

-   Different teams responsible for building and deploying different sections of the application
-   Migrating a legacy codebase from an old framework / router to a new one using the [strangler pattern](https://www.geeksforgeeks.org/strangler-pattern-in-micro-services-system-design)
-   One section of the application needs to use a certain framework / router for technical reasons

In this case, ideally we'd like to be able to compose our application of MFE's, which can each be potentially built and maintained by different teams, using different frameworks and/or routers, with different development lifecycles, and can be deployed independently of each other. In this article we will explore how we can achieve this. There are tools like [Single-SPA](https://single-spa.js.org/) which can be used to help solve some of the problems we will discuss in this article, but I think it can often be helpful to try to understand how to achieve something like this "from scratch" (or reasonably close) before bringing in a library or framework to get the job done.

## Project structure

We will create one "Host" application which will act as the shell that our MFE's will sit within. We will then create 2 MFE applications which can be developed completely independently of the host, but will be rendered inside the host, when the user visits certain routes.

Our example application will be the website for a chain of grocery stores. The main "Host" application will contain things that always display, like the header and the footer. Then lets say we have the following 2 features, for which we will create 2 MFE's:

-   Online shop - renders at `/online-shop/*` routes
-   Store locator - renders at `/store-locator/*` routes

For the host application we will use React, and [React Router](https://reactrouter.com/en/main) for the router. For the online shop we will also use React, but for the router we will use [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview). And finally for the store locator, we will use Vue, and it's built in [Vue Router](https://router.vuejs.org/introduction.html).

To get started we will just create a folder called manual_micro_frontends to contain our entire project, and inside it we will create separate directories for each application.

```
host/
onlineShop/
storeLocator/
```

We will use [Vite](https://vitejs.dev/) to generate and serve our react applications, so we will generate a new vite/react app inside of the `host` directory. After following the vite docs to create a new application using the react/javascript template, we will remove all the boilerplate JSX and styling, along with the excess files inside the `src` directory, and apply a small CSS reset. We should then be left with just the following inside our src directory:

```
// host/src/main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
```

```
// host/src/index.css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

```
// host/src/App.jsx
function App() {
    return <div>Host</div>;
}

export default App;
```

We will repeat the above process for online shop application. The only difference being in the online shop application we will also delete the `index.css` file. Styling micro frontends is another problem that needs some thought, but it's outside the scope of this tutorial, so for the sake of focusing our routing, we will just style everything in the host application's index.css file.

```
// onlineShop/src/main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

```
// onlineShop/src/App.jsx
function App() {
    return <div>Host</div>;
}

export default App;
```

We should then be able to install dependencies in each application, and run them both separately on different ports, and see our outputs in the browser:

![Host](./blog_images/host_init.PNG)
![Online Shop](./blog_images/online_shop_init.PNG)

## The "Host" application

First we will install `react-router-dom`, and create a minimal router including the following routes:

-   A "root route" which will act as a layout route, rendering common UI that appears on every other route, in our case just a header. This route will be the parent of every other route
-   "/" - just part of the host appliaction
-   "/about" - also just part of host
-   "/online-shop" - the route which will render our Online Shop MFE
-   "/store-locator" - the route which will render our Store Locator MFE

```
// host/src/router.jsx
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
                element: <div id="onlineShopMount">Host: /online-shop</div>,
            },
            {
                path: "/store-locator",
                element: <div id="storeLocatorMount">Host: /store-locator</div>,
            },
        ],
    },
]);
```

We'll then modify our App.jsx to import and render the router

```
// host/src/App.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
```

Next we'll add some minimal styling

```
// host/src/index.css
header {
    height: 60px;
    padding: 0 30px;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header nav {
    display: flex;
    gap: 20px;
}

main {
    padding: 30px;
}
```

Now if we go back to our host app in the browser, we should have a nav with a link to each of our routes, and the code for each route should render in the main page when that route is active.

![Online Shop](./blog_images/host_scaffolding.PNG)
