import User from '../models/User.mjs';

export const registerUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && user.password === req.body.password) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};