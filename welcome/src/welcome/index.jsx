import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function Welcome() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getDate() {
            const res = await fetch("http://localhost:4500/api/user");
            const data = await res.json();
            setUser(data.user);
        }

        getDate();
    }, []);

    return createPortal(
        <div>Welcome, {user?.firstName || "Guest"}</div>,
        document.getElementById("welcome-mount-div")
    );
}
