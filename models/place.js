// Import mongoose
mongoose = require("mongoose");

//* Place schema
const placeSchema = new mongoose.Schema(
	{
		name: String,
		img: String,
		description: String,
	},
	{ timestamps: true }
);

//* Place model
const Place = mongoose.model("place", placeSchema);

//* Export the model
module.exports = Place;
