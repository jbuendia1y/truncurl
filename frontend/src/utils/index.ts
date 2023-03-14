export const formatDate = (date: string | Date) => {
  const formatter = Intl.DateTimeFormat('en-US');
  const value = formatter.format(date instanceof Date ? date : new Date(date));
  return value;
};
