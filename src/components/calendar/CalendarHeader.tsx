import { View, Text, TouchableHighlight } from "react-native";

import ChevronLeft from "./../../../assets/icons/chevron-left.svg";
import ChevronRight from "./../../../assets/icons/chevron-right.svg";

export const CalendarHeader = ({
  year,
  month,
  handlePrevMonth,
  handleNextMonth,
}: {
  year: string;
  month: string;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}) => (
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
      <TouchableHighlight onPress={handlePrevMonth}>
        <ChevronLeft width={20} height={20} />
      </TouchableHighlight>
      <TouchableHighlight onPress={handleNextMonth}>
        <ChevronRight width={20} height={20} />
      </TouchableHighlight>
    </View>
  </View>
);
