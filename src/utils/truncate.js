export const truncate = (text) => {
  if (text.length > 80) {
    return `${text.slice(0, 80)}...`;
  } else {
    return text;
  }
};
