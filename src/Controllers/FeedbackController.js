import { UserFeedbacks } from "../Models/feedback";

const createFeedback = async (req, res) => {


    const {roomCode, giverName, evaluatedName, message} = req.body;
    
    const feedbackInfo = {
        roomCode,
        evaluatorName : giverName,
        content : message,
    }

    const evaluatedUser = await UserFeedbacks.findOne({evaluatedName});
    let addFeedbackResult = "";
    if (!evaluatedUser) {
        addFeedbackResult = await UserFeedbacks.create({evaluatedName, feedbacks : feedbackInfo});
    } else {
        addFeedbackResult = await UserFeedbacks.findOneAndUpdate(
            { evaluatedName : evaluatedName }, 
            { $push : 
                { feedbacks : feedbackInfo}
            }
        );
    }

    if (!addFeedbackResult) {
        res.status(500).json({"message" : "Server_Error"});
    }

    return res.status(201).json(addFeedbackResult);
}

const getMyFeedbacks = async (req, res) => {


    const nickname = req.query.iam || null;
    if (!nickname) {
        return res.status(200).json({"message": "insert nickname"});
    }

    let myfeedback = await UserFeedbacks.findOne({ evaluatedName : nickname});
    
    if (!myfeedback) {
        myfeedback = {"message" : "no feedbacks"};
    }

    return res.status(200).json(myfeedback);
}

const getTempMessage = async(req,res) => {
    const nickname = "testname";
    const myfeaback = await UserFeedbacks.create({
        evaluatedName: nickname, 
        feedbacks : {
            roomCode : 2000,
            evaluatorName : "givername",
            content : "testtestsetset",
        } 
    })
    return res.status(200).json(myfeaback);
};

export { createFeedback, getMyFeedbacks, getTempMessage};