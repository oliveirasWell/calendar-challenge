import { View, Text, StyleSheet } from "react-native";

import { CalendarBody } from "./components/CalendarBody";
import { CalendarHeader } from "./components/CalendarHeader";
import { useCalendarFunctions } from "./hooks/useCalendarDate";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 48,
    marginBottom: 16,
  },
  calendarContainer: {
    flexGrow: 1,
    backgroundColor: theme.colors.deepBlack,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 7,
    padding: 12,
  },
});

interface CalendarProps {
  accentColor?: string;
}

const Calendar = ({ accentColor = theme.colors.turquoise }: CalendarProps) => {
  const {
    date,
    setDate,
    weeks,
    month,
    year,
    handlePrevMonth,
    handleNextMonth,
  } = useCalendarFunctions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.calendarContainer}>
        <CalendarHeader
          {...{ year, month, handlePrevMonth, handleNextMonth }}
        />
        <CalendarBody {...{ weeks, date, setDate, accentColor }} />
      </View>
    </View>
  );
};

export default Calendar;
