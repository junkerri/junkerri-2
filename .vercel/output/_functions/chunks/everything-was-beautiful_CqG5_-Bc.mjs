const everythingWasBeautiful = new Proxy({"src":"/_astro/everything-was-beautiful.Djo6O1c3.jpg","width":3000,"height":3000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/illustrations/everything-was-beautiful.jpg";
							}
							
							return target[name];
						}
					});

export { everythingWasBeautiful as e };
