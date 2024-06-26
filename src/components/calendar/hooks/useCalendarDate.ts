import { useMemo, useState } from "react";

import { getLastXDayOfLastMonth, splitIntoChunks } from "../utils";

export const useCalendarFunctions = () => {
  const [date, setDate] = useState(new Date());

  const month = useMemo(
    () => date.toLocaleString("default", { month: "long" }),
    [date],
  );
  const year = useMemo(
    () => date.toLocaleString("default", { year: "numeric" }),
    [date],
  );

  const weeks = useMemo(() => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const firstDayOfMonthIndex = firstDayOfMonth.getDay();
    const lastDayOfMonthIndex = lastDayOfMonth.getDay();

    const missingDaysAtStart =
      firstDayOfMonthIndex === 0 ? 6 : firstDayOfMonthIndex;
    const missingDaysAtEnd =
      lastDayOfMonthIndex === 0 ? 7 : 7 - lastDayOfMonthIndex;

    const listOfDays = [];

    for (let i = 0; i < missingDaysAtStart; i++) {
      listOfDays.push(getLastXDayOfLastMonth(missingDaysAtStart - i, date));
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      listOfDays.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    for (let i = 1; i < missingDaysAtEnd; i++) {
      listOfDays.push(new Date(date.getFullYear(), date.getMonth() + 1, i));
    }

    return splitIntoChunks(listOfDays, 7);
  }, [date]);

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  return {
    setDate,
    date,
    weeks,
    month,
    year,
    handlePrevMonth,
    handleNextMonth,
  };
};
