module.exports = function (config) {
	config.addPlugin(require("eleventy-sass"));
	config.addPassthroughCopy("static");

	config.addShortcode("year", () => new Date().getFullYear()+"");
	config.addFilter("limit", (arr, count) => arr.slice(0, count));

	return {
		dir: {
			includes: "includes",
			data: "../data",
			output: "dist",
			input: "src",
		}
	};
};
