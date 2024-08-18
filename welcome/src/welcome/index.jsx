import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, Outlet } from "react-router-dom";

export function Welcome() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const res = await fetch("http://localhost:4500/api/user");
            const data = await res.json();
            setUser(data.user);
        }

        getUser();
    }, []);

    return createPortal(
        <div>
            <div>Welcome, {user?.firstName || "Guest"}</div>
            <div>
                <Link to="/welcome/one">One page</Link>
            </div>
            <div>
                <Link to="/welcome/two">Two page</Link>
            </div>
            <Outlet />
        </div>,
        document.getElementById("welcome-mount-div")
    );
}
