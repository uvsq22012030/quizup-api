const joi = require("@hapi/joi");

module.exports = [
	{
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return {
				info: "Quiz up api v1",
			};
		},
	},
	/* 
	{
		method: "POST",
		path: "/",
		handler: (request, h) => {
			return {
				hello: "world",
			};
		},
		options: {
			validate: {
				payload: joi.object().keys({
					email: joi.string().email().required(),
				}),
			},
		},
	}, 
	*/
];
