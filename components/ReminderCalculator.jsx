/*
File: ReminderCalculator.jsx
Description: Calculates the next recommended aquarium water change date.
Author: Nathan Reid
*/

export default function ReminderCalculator(lastChangeDate) {
  const date = new Date(lastChangeDate);

  if (isNaN(date)) {
    return "Invalid date";
  }

  date.setDate(date.getDate() + 7); // weekly water change

  return date.toISOString().split("T")[0];
}
