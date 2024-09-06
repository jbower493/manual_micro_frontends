import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

app.get("/assets/:mfeName", (req, res) => {
    res.setHeader("Content-Type", "text/javascript");
    const js = fs.readFileSync(`./server/assets/${req.params.mfeName}.js`);
    res.send(js);
});

app.listen(4000, () => console.log("server listening on port 4000"));
