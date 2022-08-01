module.exports = function (config) {
	config.addPlugin(require("eleventy-sass"));
	config.addPassthroughCopy("static");

	config.addShortcode("year", () => new Date().getFullYear()+"");
	config.addFilter("limit", (arr, count) => arr.slice(0, count));

	config.addCollection("comic", (collectionApi) => {
		return collectionApi.getFilteredByTag("comic").sort(
			(a, b) => {
				function getIndex (fname) {
					return parseInt(fname.match(/^[\D0]*(\d+)/)[1]);
				}
				return getIndex(a.fileSlug) - getIndex(b.fileSlug);
			}
		)
	});

	return {
		dir: {
			includes: "../includes",
			data: "../data",
			output: "dist",
			input: "src",
		}
	};
};
