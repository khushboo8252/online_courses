const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  const { name, email, phoneNumber, issue, message } = req.body;

  if (!name || !email || !phoneNumber || !issue || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, phoneNumber, issue, message });
    await newContact.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again.', error });
  }
};
