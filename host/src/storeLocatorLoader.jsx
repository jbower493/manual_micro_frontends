import { useRef } from "react";
import { useEffect } from "react";

export function StoreLocatorLoader() {
    const rootRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `http://localhost:4000/assets/storeLocator?date=${new Date().getTime()}`;
        script.type = "module";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            window.postMessage("UNMOUNT_STORE_LOCATOR");
            document.body.removeChild(script);
        };
    }, []);

    return <div id="storeLocatorRoot" ref={rootRef}></div>;
}
