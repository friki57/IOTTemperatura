const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperaturaSchema = Schema({
	temperatura: Number,
	hora: String
});

module.exports = mongoose.model('temperaturas', temperaturaSchema);
