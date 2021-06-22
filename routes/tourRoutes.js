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

const { protect, restrictTo } = require('./../controllers/authController')

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
  .get(protect, getTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;

//Consolas, 'Courier New', monospace
