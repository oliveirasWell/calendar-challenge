import { View, Text, TouchableWithoutFeedback } from "react-native";

import { getWeekNumber } from "./utils";

export const CalendarView = ({
  weeks,
  date,
  setDate,
}: {
  weeks: Date[][];
  date: Date;
  setDate: (arg: Date) => void;
}) => (
  <View style={{ marginTop: 12 }}>
    {weeks.map((week) => (
      <View
        key={getWeekNumber(week[0])}
        style={{
          flexDirection: "row",
          flexGrow: 1,
          justifyContent: "space-between",
          marginVertical: 8,
        }}
      >
        {week.map((day) => {
          const isCurrentDay = day.toDateString() === date.toDateString();

          const color =
            day.getMonth() === date.getMonth() ? "#FFFF" : "#3A3A3A";

          const backgroundColor = isCurrentDay ? "#00A19B" : "transparent";

          return (
            <View
              key={day.toDateString()}
              style={{
                width: 27,
                height: 27,
                borderRadius: 27,
                backgroundColor,
                justifyContent: "center",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  setDate(day);
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 15,
                    color,
                    textAlign: "center",
                    lineHeight: 22.5,
                  }}
                >
                  {day.getDate()}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
    ))}
  </View>
);
