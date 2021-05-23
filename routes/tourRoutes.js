const express = require('express');

const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(getTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
