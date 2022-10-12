const express = require('express');
const Joi = require('joi');

// const feedbacks = require('../../models/feedback');
const Feedback = require('../../models/feedback')

const createError = require('../../helpers/createError')

const router = express.Router();

const feedbackAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required()
})

router.get('/', async (req, res, next) => {
  try {
    const result = await Feedback.find();
  res.json(result);
  } catch (error) {
   next(error)
  } 
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = feedbackAddSchema.validate(req.body);
    if (error) {
      // console.log(error.message)
      throw createError(400, error.message);
    }
    const result = await Feedback.create(req.body);
    res.status(201).json(result)
    // res.json({ message: 'template message' })
  } catch (error) {
    next(error)
  }
  
})

module.exports = router
