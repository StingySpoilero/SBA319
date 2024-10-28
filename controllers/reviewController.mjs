import Review from '../models/Review.mjs';

export const getReviewsByBook = async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.id }).populate('userId');
  res.json(reviews);
};

export const addReview = async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.status(201).json(newReview);
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).send();
};