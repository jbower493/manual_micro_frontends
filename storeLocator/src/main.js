import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

const app = createApp(App);
app.use(router);
app.mount("#storeLocatorRoot");

function messageListener(event) {
    if (event.data === "UNMOUNT_STORE_LOCATOR") {
        app.unmount();

        window.removeEventListener("message", messageListener);
    }
}

window.addEventListener("message", messageListener);
