const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => console.log('MongoDB Compass connection successfull!'))

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => console.log('MongoDB Atlas connection successfull!'))


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server listening on port ${port}...`);
});
