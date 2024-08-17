import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

class RouteChangePubSub {
    #subscribers = [];
    #idCounter = 1;

    subscribe(callback) {
        const newSubscriberId = this.#idCounter;
        this.#idCounter++;
        this.#subscribers.push({ id: newSubscriberId, callback });

        return () => {
            this.#subscribers = this.#subscribers.filter(
                ({ id }) => id !== newSubscriberId
            );
        };
    }

    publish() {
        this.#subscribers.forEach(({ callback }) => {
            callback();
        });
    }
}

const routeChangePubSub = new RouteChangePubSub();
window.routeChangePubSub = routeChangePubSub;

createRoot(document.getElementById("root")).render(<App />);
