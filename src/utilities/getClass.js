export const getClass = (classes) =>
  classes
    .filter((item) => item !== '') /* if it is empty it will get filtered out */
    .join(' ')
    .trim();
