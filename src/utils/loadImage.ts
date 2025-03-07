export const loadImage = (nameImage: string): string => {
  return require(`../assets/images/${nameImage}`);
};

const images = import.meta.glob("../assets/images/*", { eager: true });

export const getImageByName = (fileName: string): string | undefined => {
  for (const path in images) {
    if (path.endsWith(fileName)) {
      return (images[path] as any).default;
    }
  }
  return undefined;
};

export const getListImg = (name: string): string[] => {
  let gallery = ['1', '2', '3'];
  gallery = gallery.map(g =>  getImageByName(`${name}-${g}.png`) ?? '');
  return gallery;
};
