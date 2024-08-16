import express from "express";
import fs from "node:fs";

const app = express();

app.use(express.json());

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/api/year", (_, res) => {
    res.json({ year: "2024" });
});

app.get("/api/user", (_, res) => {
    const user = {
        firstName: "John",
        lastName: "Doe",
    };

    res.json({ user });
});

app.get("/api/books", (_, res) => {
    const books = [
        {
            id: 1,
            title: "Lord of the Rings - Return of the King",
            author: "J. R. R. Tolkien",
        },
        {
            id: 2,
            title: "Harry Potter - The Philosophers Stone",
            author: "J. K. Rowling",
        },
        {
            id: 3,
            title: "Fantastic Mr Fox",
            author: "Rohl Dahl",
        },
    ];

    res.json({ books });
});

app.get("/script/:appName", (req, res) => {
    const dirname = `../${req.params.appName}/dist/assets`;
    const assetsDir = fs.readdirSync(dirname);
    const jsFileName = assetsDir.find((fileName) => fileName.endsWith(".js"));
    const jsFileContents = fs.readFileSync(`${dirname}/${jsFileName}`);

    res.send(jsFileContents);
});

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
