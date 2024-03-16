const id = "paul-lucas";
const collection = "creators";
const data = {name:"Paul Lucas",link:"https://www.youtube.com/@Paul_Lucas",photo:
						new Proxy({"src":"/_astro/paul-lucas.eyBHXk6n.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/paul-lucas.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/paul-lucas.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/paul-lucas.json",
	rawData: "",
};

export { _internal, collection, data, id };
