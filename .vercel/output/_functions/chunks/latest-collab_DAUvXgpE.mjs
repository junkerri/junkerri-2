const latestCollab = new Proxy({"src":"/_astro/latest-collab.QS6n15B5.jpg","width":3500,"height":3500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/photos/latest-collab.jpg";
							}
							
							return target[name];
						}
					});

export { latestCollab as l };
