export const formatToSlug = (text : string) => {
  return text.toLowerCase().replace(/ /g, '_');
};
