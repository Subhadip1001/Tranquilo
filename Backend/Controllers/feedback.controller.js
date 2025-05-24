import Feedback from "../Models/feedback.model.js";

export const createFeedback = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    const newFeedback = new Feedback({
      fullname,
      email,
      message,
    });

    await newFeedback.save();
    return res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

