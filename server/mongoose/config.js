const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost:27017/quiz-api");

const CategoryModel = Mongoose.model("category", {
	id: ObjectId,
	name: String,
	questions: Array,
});
