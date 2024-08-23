import { useEffect } from "react";

export function OnlineShopLoader() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `./public/index-C7-K6_Jd.js?date=${new Date().getTime()}`;
        script.type = "module";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="onlineShopRoot"></div>;
}
