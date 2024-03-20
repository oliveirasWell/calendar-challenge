import { View, Text } from "react-native";

import { CalendarHeader } from "./CalendarHeader";
import { CalendarView } from "./CalendarView";
import { useCalendarDate } from "./useCalendarDate";

const Calendar = () => {
  const {
    date,
    setDate,
    weeks,
    month,
    year,
    handlePrevMonth,
    handleNextMonth,
  } = useCalendarDate();

  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontSize: 32,
          color: "white",
          fontFamily: "Poppins_600SemiBold",
          lineHeight: 48,
          marginBottom: 16,
        }}
      >
        Calendar
      </Text>

      <View
        style={{
          flexGrow: 1,
          backgroundColor: "#131313",
          borderWidth: 1,
          borderColor: "#B7B7B7",
          borderRadius: 7,
          padding: 12,
        }}
      >
        <CalendarHeader
          {...{ year, month, handlePrevMonth, handleNextMonth }}
        />
        <CalendarView {...{ weeks, date, setDate }} />
      </View>
    </View>
  );
};

export default Calendar;
