export function diff(checkInDate, checkOutDate) {
  const checkInDateConvert = new Date(checkInDate);
  const checkOutDateConvert = new Date(checkOutDate);
  // Calculate the difference in milliseconds
  const differenceInMs =
    checkOutDateConvert.getTime() - checkInDateConvert.getTime();
  // Convert the difference to days
  const differenceInDays = differenceInMs / (1000 * 3600 * 24);
  return differenceInDays;
}
