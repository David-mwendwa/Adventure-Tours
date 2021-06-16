const express = require('express')

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./../controllers/userController');
const { signup, login } = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router
  .route('/')
  .get(getUsers)
  .post(createUser);
 
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
