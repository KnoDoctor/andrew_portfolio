export function convertToSlug(Text) {
	try {
		return Text.toLowerCase()
			.replace(/ /g, "-")
			.replace(/[^\w-]+/g, "");
	} catch (e) {
		console.log(e);
	}
}

export function returnCurrentModule(router) {
	let path = router.asPath;

	let currentModule = path.split("/")[2];
	return currentModule;
}

export function referenceStagingMedia(mediaUrl) {
	let isMediaUrl = mediaUrl ? mediaUrl.indexOf("https://media.butterfield.com") > -1 : "";
	let returnUrl = mediaUrl;

	if (isMediaUrl) {
		let fileName = mediaUrl.match(/([^\/]*)\/*$/)[1];
		returnUrl = "https://staging.media.butterfield.com/" + fileName;
	}

	return returnUrl;
}

export function parseWpCharacters(s) {
	let string = s;
	string = string.replace(/&#038;/g, "&");
	string = string.replace(/&#8217;/g, "'");
	string = string.replace(/&amp;/g, "&");
	return string;
}
