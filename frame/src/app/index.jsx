import { Footer } from "../footer";
import { Header } from "../header";
import { FakeRouter } from "./fakeRouter";
import "./app.css";
import { useState } from "react";

function App() {
    const [, setState] = useState({});

    function forceRerender() {
        setState({});
        const message = { type: "ROUTE_CHANGE", data: "The route changed" };
        window.postMessage(message, "*");
    }

    return (
        <div className="app">
            <Header />
            <main>
                <div>
                    <a
                        href="null"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, "", "/");
                            forceRerender();
                        }}
                    >
                        Home
                    </a>
                </div>
                <div>
                    <a
                        href="null"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, "", "/welcome");
                            forceRerender();
                        }}
                    >
                        Welcome
                    </a>
                </div>
                <div>
                    <a
                        href="null"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, "", "/bob");
                            forceRerender();
                        }}
                    >
                        Bob
                    </a>
                </div>
                <p>Hello from App</p>
                <FakeRouter />
                <div id="table"></div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
