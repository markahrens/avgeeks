const id = "dennis-bunnik";
const collection = "creators";
const data = {name:"Dennis Bunnik",link:"https://www.youtube.com/c/DennisBunnikTravels",photo:
						new Proxy({"src":"/_astro/dennis-bunnik.Bg63F4Nd.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/dennis-bunnik.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/dennis-bunnik.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/dennis-bunnik.json",
	rawData: "",
};

export { _internal, collection, data, id };
