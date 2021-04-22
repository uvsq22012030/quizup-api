const routes = [].concat(
	require("../routes/home"),
	require("../routes/questions")
);

module.exports = {
	plugin: {
		name: "router",
		register: (server, options) => {
			server.route(routes);
		},
	},
};
