import { View, Text, TouchableWithoutFeedback } from "react-native";

import { useCalendarDate } from "./useCalendarDate";
import { getWeekNumber } from "./utils";

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexGrow: 1,
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white",
                fontFamily: "Poppins_500Medium",
                lineHeight: 22.5,
                letterSpacing: 0.03,
              }}
            >
              {month}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Poppins_500Medium",
                lineHeight: 37.5,
                letterSpacing: 0.03,
                marginLeft: 4,
              }}
            >
              {year}
            </Text>
          </View>

          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableWithoutFeedback onPress={handlePrevMonth}>
              <Text style={{ color: "white" }}>prev</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleNextMonth}>
              <Text style={{ color: "white" }}> next </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View>
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
                  day.getMonth() === date.getMonth() ? "white" : "#3A3A3A";

                const backgroundColor = isCurrentDay
                  ? "#00A19B"
                  : "transparent";

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
                          color,
                          textAlign: "center",
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
      </View>
    </View>
  );
};

export default Calendar;
