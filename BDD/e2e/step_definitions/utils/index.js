export const splitDateIntoDayMonthYear = (date) => {
  const [day, month, year] = date.split(" ");
  return { day: day, month: month, year: year };
};
