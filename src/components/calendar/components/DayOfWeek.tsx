import { memo } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { theme } from "src/theme/theme";

import { DayOfWeekProps } from "./DayOfWeekProps";

const dayOfWeekStyles = StyleSheet.create({
  dayText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22.5,
  },
  day: {
    width: 27,
    height: 27,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const DayOfWeek = memo(
  ({ day, date, setDate, accentColor }: DayOfWeekProps) => {
    const isCurrentDay = day.toDateString() === date.toDateString();
    const dayInCurrentMonth = day.getMonth() === date.getMonth();

    const dayStyle = [
      dayOfWeekStyles.day,
      {
        backgroundColor: isCurrentDay ? accentColor : theme.colors.transparent,
        color: dayInCurrentMonth ? theme.colors.white : theme.colors.darkGray,
      },
    ];
    const dayTextStyle = [
      dayOfWeekStyles.dayText,
      {
        color: dayInCurrentMonth ? theme.colors.white : theme.colors.darkGray,
      },
    ];

    return (
      <View style={dayStyle}>
        <TouchableWithoutFeedback
          onPress={() => {
            setDate(day);
          }}
        >
          <Text style={dayTextStyle}>{day.getDate()}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  },
);
