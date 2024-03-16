const id = "josh-cahill";
const collection = "creators";
const data = {name:"Josh Cahill",link:"https://www.youtube.com/@JoshCahill",photo:
						new Proxy({"src":"/_astro/josh-cahill.6czkPTsc.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/josh-cahill.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/josh-cahill.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/josh-cahill.json",
	rawData: "",
};

export { _internal, collection, data, id };
