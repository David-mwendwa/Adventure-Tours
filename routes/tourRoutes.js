const express = require('express');

const {
  aliasTopTours,
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  getToursStats,
  getMonthlyPlans
} = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/top-5-cheap')
  .get(aliasTopTours, getTours);

router
  .route('/tour-stats')
  .get(getToursStats);

router
  .route('/monthly-plan/:year')
  .get(getMonthlyPlans);

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
