const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['security', 'medical', 'food', 'supplies', 'repair', 'tech support', 'transportation'], required: true },
  location: { type: String, required: true },
  urgency: { type: String, enum: ['emergency', 'urgent', 'regular'], required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
