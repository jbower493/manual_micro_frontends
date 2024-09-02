import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const rootDiv = document.getElementById("onlineShopRoot");
const root = createRoot(rootDiv);
root.render(<App />);

function messageListener(event) {
    if (event.data === "UNMOUNT_ONLINE_SHOP") {
        console.log(event.data);
        root.unmount();

        window.removeEventListener("message", messageListener);
    }
}

window.addEventListener("message", messageListener);
