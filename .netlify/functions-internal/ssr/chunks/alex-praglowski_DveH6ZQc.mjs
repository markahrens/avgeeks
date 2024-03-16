const id = "alex-praglowski";
const collection = "creators";
const data = {name:"Alex Praglowski",link:"https://www.youtube.com/@AlexPraglowskiAviation",photo:
						new Proxy({"src":"/_astro/alex-praglowski.BXpCqydw.jpg","width":176,"height":176,"format":"jpg","fsPath":"/Users/markahrens/Sites/avgeek/src/assets/avatars/alex-praglowski.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/markahrens/Sites/avgeek/src/assets/avatars/alex-praglowski.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/markahrens/Sites/avgeek/src/content/creators/alex-praglowski.json",
	rawData: "",
};

export { _internal, collection, data, id };
