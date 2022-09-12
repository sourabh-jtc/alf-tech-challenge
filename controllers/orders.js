import Orders from '../models/orders.js';

export const placeOrder = async (req, res) => {
  const order = req.body;

  const newOrder = new Orders(order);
  try {
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
