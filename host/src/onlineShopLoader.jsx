import { useRef } from "react";
import { useEffect } from "react";

export function OnlineShopLoader() {
    const rootRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `/index-CAZf1r2y.js?date=${new Date().getTime()}`;
        script.type = "module";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            window.postMessage("UNMOUNT_ONLINE_SHOP");
            document.body.removeChild(script);
        };
    }, []);

    return <div id="onlineShopRoot" ref={rootRef}></div>;
}
