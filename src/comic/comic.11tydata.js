function filenameGetIndexString (filename) {
	return filename.match(/^[\D0]*(\d+)/)[1];
}

module.exports = function (Data) {
	return {
		tags: ["comic"],
		layout: "../includes/comic.njk",

		eleventyComputed: {
			title: (data) => filenameGetIndexString(data.page.fileSlug),
			permalink: (data) => {
				return "/" + filenameGetIndexString(data.page.fileSlug) + "/";
			},


			comic: {
				index: (data) => parseInt(filenameGetIndexString(data.page.fileSlug)),
				image: (data) => {
					const filename =
						`sh_${filenameGetIndexString(data.page.fileSlug).padStart(4, "0")}.png`;

					return {
						landscape: `/static/comic/landscape/${filename}`,
						portrait: `/static/comic/portrait/${filename}`
					};
				}
			}
		}
	}
};
