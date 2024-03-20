import { View, StyleSheet } from "react-native";

import { DayOfWeek } from "./DayOfWeek";
import { DayOfWeekProps } from "./DayOfWeekProps";
import { getWeekNumber } from "../utils";

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  weekRow: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    marginVertical: 8,
  },
});

interface CalendarBodyProps extends Omit<DayOfWeekProps, "day"> {
  weeks: Date[][];
}

export const CalendarBody = ({
  weeks,
  date,
  setDate,
  accentColor,
}: CalendarBodyProps) => (
  <View style={styles.container}>
    {weeks.map((week) => (
      <View key={getWeekNumber(week[0])} style={styles.weekRow}>
        {week.map((day) => (
          <DayOfWeek
            key={day.toDateString()}
            day={day}
            date={date}
            setDate={setDate}
            accentColor={accentColor}
          />
        ))}
      </View>
    ))}
  </View>
);
