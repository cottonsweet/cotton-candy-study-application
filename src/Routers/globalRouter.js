import express from "express";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();
const globalRouter = express.Router();
const frontUrl = process.env.FRONT_URL || "https://cottoncandy-study.netlify.app";

globalRouter.use("/", cors({ origin: frontUrl }));
globalRouter.route("*").get( (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/index.html'));
});

export default globalRouter;