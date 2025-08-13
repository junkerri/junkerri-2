const hurt = new Proxy({"src":"/_astro/hurt.LDFCC1W3.jpg","width":3500,"height":3500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/album art/hurt.jpg";
							}
							
							return target[name];
						}
					});

const easternGold = new Proxy({"src":"/_astro/eastern-gold.DVmNDonE.jpg","width":3500,"height":3500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/album art/eastern-gold.jpg";
							}
							
							return target[name];
						}
					});

const moonIsCake = new Proxy({"src":"/_astro/moon-is-cake.BKK89b38.jpg","width":3024,"height":1964,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/album art/moon-is-cake.jpg";
							}
							
							return target[name];
						}
					});

export { easternGold as e, hurt as h, moonIsCake as m };
