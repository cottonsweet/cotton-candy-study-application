import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    roomCode: { type: String, required: true},
    evaluatorName: { type : String, required: true},
    content: { type: String, required: true },
    createdAt: { type: Date, default: () => Date.now()}
})

const userFeedbackSchema = new mongoose.Schema({
    evaluatedId: { type: mongoose.Schema.Types.ObjectId, required : false },
    evaluatedName: { type: String, required: true}, 
    feedbacks: [{type : feedbackSchema, required : false, default : [] }]
})

const Feedback = mongoose.model("Feedback", feedbackSchema);
const UserFeedbacks = mongoose.model("UserFeedback", userFeedbackSchema);

export { Feedback, UserFeedbacks};
