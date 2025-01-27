export const truncateText = (text: string, length: number) => {
  let t: any;

  if (text.length >= length) {
    t = `${text.slice(0, length)}... `;
  } else {
    t = text;
  }
  return t;
};
