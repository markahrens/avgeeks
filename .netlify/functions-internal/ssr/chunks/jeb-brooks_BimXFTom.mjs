const id = "jeb-brooks";
const collection = "creators";
const data = {name:"Jeb Brooks",link:"https://www.youtube.com/@GreenerGrass",photo:
						new Proxy({"src":"/_astro/jeb-brooks.Cby2k7S4.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/jeb-brooks.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/jeb-brooks.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/jeb-brooks.json",
	rawData: "",
};

export { _internal, collection, data, id };
