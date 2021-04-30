module.exports = {
	plugin: require("hapi-mongodb"),
	options: {
		url: process.env.MONGO_URL,
		settings: {
			useUnifiedTopology: true,
		},
		decorate: true,
	},
};
