const artistPhoto = new Proxy({"src":"/_astro/artist-photo.2IYhiEn4.jpg","width":1638,"height":1638,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/photos/artist-photo.jpg";
							}
							
							return target[name];
						}
					});

export { artistPhoto as a };
