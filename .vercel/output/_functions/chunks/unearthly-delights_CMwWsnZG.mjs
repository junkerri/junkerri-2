const unearthlyDelights = new Proxy({"src":"/_astro/unearthly-delights.B5TKY76e.jpg","width":3500,"height":3500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/album art/unearthly-delights.jpg";
							}
							
							return target[name];
						}
					});

export { unearthlyDelights as u };
