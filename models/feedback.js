const { Schema, model } = require("mongoose");

const feedbackSchema = Schema({
  name: String,
  email: String,
  message: String,
});

const Feedback = model("feedback", feedbackSchema);

module.exports = Feedback;

// const fs = require('fs/promises');
// const path = require('path');

// const feedbackPath = path.join(__dirname, "feedback.json");

// const updateFeedbacks = async (feedbacks) => {
//   await fs.writeFile(feedbackPath, JSON.stringify(feedbacks, null, 2))
// }

// const getAll = async () => {
//   const data = await fs.readFile(feedbackPath);
//   return JSON.parse(data);
// }

// const add = async ({name, email, message}) => {
//   const feedbacks = await getAll();
//   const newFeedback = {
//     name,
//     email,
//     message
//   };
//   feedbacks.push(newFeedback);
//   updateFeedbacks(feedbacks);
//   return newFeedback;
// }

// // const updateFeedback = async (contactId, body) => {}

// module.exports = {
//   getAll,
//   add,
//   updateFeedbacks,
// }
