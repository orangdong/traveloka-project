import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import error from 'http-errors';
import usersRoutes from './routes/users.js';
import hotelsRoutes from './routes/hotels.js';
import reviewsRoutes from './routes/reviews.js';
import checkToken from './middlewares/check-token.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', async (req, res) => {
  res.send({
    status: 'success',
    message: 'Traveloka Hotel Ranking API',
  });
});

// User Routes
app.use('/users', checkToken, usersRoutes);
// Hotel Routes
app.use('/hotels', hotelsRoutes);
// Review Routes
app.use('/reviews', reviewsRoutes);


app.use((req, res, next) => {
  next(error.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));

