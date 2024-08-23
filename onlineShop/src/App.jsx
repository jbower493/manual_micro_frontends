import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

// router.cleanCache();
router.__store = null;

function App() {
    return <RouterProvider router={router} />;
}

export default App;
