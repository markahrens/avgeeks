const id = "miles-by-foot";
const collection = "creators";
const data = {name:"Miles By Foot",link:"https://www.youtube.com/@MilesByFoot",photo:
						new Proxy({"src":"/_astro/miles-by-foot.DZjtannn.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/miles-by-foot.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/miles-by-foot.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/miles-by-foot.json",
	rawData: "",
};

export { _internal, collection, data, id };
