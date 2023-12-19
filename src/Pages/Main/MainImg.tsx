function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const randomImg = [
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
  { imageURL: `https://picsum.photos/id/${rand(1, 1000)}/350/400` },
];
