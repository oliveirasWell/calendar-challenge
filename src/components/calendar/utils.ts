export function getLastXDayOfLastMonth(x: number, today: Date) {
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  const lastXDayOfLastMonth = new Date(lastDayOfLastMonth);
  lastXDayOfLastMonth.setDate(lastDayOfLastMonth.getDate() - x + 1); // Adding 1 because we start counting from 1st of the month
  return lastXDayOfLastMonth;
}
export function splitIntoChunks(array: Date[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}
export function getWeekNumber(date: Date) {
  // Copy the date so the original date won't be modified
  const tempDate = new Date(date.valueOf());

  // Set the date to Thursday in the current week since the ISO week starts with Monday
  // and Thursday is always in the year that is considered the ISO week year
  tempDate.setHours(0, 0, 0, 0);
  tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));

  // Calculate the first Thursday of the year
  const firstThursday = new Date(tempDate.getFullYear(), 0, 4);

  // Set the first Thursday in the ISO week definition
  firstThursday.setDate(
    firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7),
  );

  // Calculate the number of weeks between the first Thursday and the current Thursday in the week
  const weekNumber =
    1 +
    Math.round(
      ((tempDate.getTime() - firstThursday.getTime()) / 86400000 -
        3 +
        ((firstThursday.getDay() + 6) % 7)) /
        7,
    );

  return weekNumber;
}
