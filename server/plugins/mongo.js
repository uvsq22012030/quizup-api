module.exports = {
	plugin: require("hapi-mongodb"),
	options: {
		// uri:  "mongodb+srv://{YOUR-USERNAME}:{YOUR-PASSWORD}@main.zxsxp.mongodb.net/sample_mflix?retryWrites=true&w=majority",
		url: "mongodb://localhost:27017/quiz-api",
		settings: {
			useUnifiedTopology: true,
		},
		decorate: true,
	},
};
