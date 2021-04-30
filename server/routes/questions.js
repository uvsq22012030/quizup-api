// get categories
// get questions (category, amount, difficulty)
// get question by id

// get everything categories and questions
module.exports = [
	{
		method: "GET",
		path: "/all",
		handler: async (req, h) => {
			const all = await req.mongo.db
				.collection("categories")
				.find({})
				.toArray();
			return all;
		},
	},
	{
		method: "GET",
		path: "/categories",
		handler: async (req, h) => {
			const all = await req.mongo.db
				.collection("categories")
				.find({})
				.toArray();
			return all.map((item) => {
				return { id: item._id, name: item.name };
			});
		},
	},

	{
		method: "GET",
		path: "/categories/{id}",
		handler: async (req, h) => {
			const id = req.params.id;
			const ObjectID = req.mongo.ObjectID;
			const category = await req.mongo.db
				.collection("categories")
				.findOne({ _id: new ObjectID(id) });
			return category;
		},
	},

	{
		method: "POST",
		path: "/top-categories",
		handler: async (req, h) => {
			const id = req.params.id;
			const ObjectID = req.mongo.ObjectID;
			const category = await req.mongo.db
				.collection("top")
				.findOne({ _id: new ObjectID(id) });
			return category;
		},
	},

	// send a list of top priorities
	{
		method: "GET",
		path: "/top-categories",
		handler: async (req, h) => {
			const id = req.params.categories;
			const ObjectID = req.mongo.ObjectID;
			const category = await req.mongo.db
				.collection("top-cat")
				.findOne({ _id: new ObjectID(id) });
			return category;
		},
	},
];
