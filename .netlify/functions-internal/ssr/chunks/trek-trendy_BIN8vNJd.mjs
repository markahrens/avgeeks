const id = "trek-trendy";
const collection = "creators";
const data = {name:"Trek Trendy",link:"https://www.youtube.com/@Trektrendy",photo:
						new Proxy({"src":"/_astro/trek-trendy.7iHtfqzj.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/trek-trendy.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/trek-trendy.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/trek-trendy.json",
	rawData: "",
};

export { _internal, collection, data, id };
