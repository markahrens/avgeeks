const id = "noel-philips";
const collection = "creators";
const data = {name:"Noel Philips",link:"https://www.youtube.com/@noelphilips",photo:
						new Proxy({"src":"/_astro/noel-philips.Drh6cZYS.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/noel-philips.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/noel-philips.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/noel-philips.json",
	rawData: "",
};

export { _internal, collection, data, id };
