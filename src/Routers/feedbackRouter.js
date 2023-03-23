import express from "express";
import cors from "cors";
import { createFeedback, getMyFeedbacks, getTempMessage } from "../Controllers/FeedbackController.js"

const feedbackRouter = express.Router();

const frontUrl = process.env.FRONT_URL || "https://cottoncandy-study.netlify.app";

feedbackRouter.use("/", cors({ origin: frontUrl }));

// 헤더반환
feedbackRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", frontUrl);
  next();
});

feedbackRouter.route("/create").post(createFeedback);
feedbackRouter.route("/myfeedback").get(getMyFeedbacks);

feedbackRouter.route("/").get(getTempMessage);

export default feedbackRouter;