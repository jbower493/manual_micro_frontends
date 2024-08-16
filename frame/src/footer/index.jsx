import { useEffect, useState } from "react";
import "./footer.css";

export function Footer() {
    const [year, setYear] = useState("This year");

    useEffect(() => {
        async function getDate() {
            const res = await fetch("http://localhost:4500/api/year");
            const data = await res.json();
            setYear(data.year);
        }

        getDate();
    }, []);

    return <footer>Copyright {year}</footer>;
}
