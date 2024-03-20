import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import ChevronLeft from "../../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../../assets/icons/chevron-right.svg";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  monthYearContainer: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "baseline",
  },
  monthText: {
    fontSize: 15,
    color: "white",
    fontFamily: "Poppins_500Medium",
    lineHeight: 22.5,
    letterSpacing: 0.03,
  },
  yearText: {
    fontSize: 25,
    color: "white",
    fontFamily: "Poppins_500Medium",
    lineHeight: 37.5,
    letterSpacing: 0.03,
    marginLeft: 4,
  },
  navigationContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

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
  <View style={styles.headerContainer}>
    <View style={styles.monthYearContainer}>
      <Text style={styles.monthText}>{month}</Text>
      <Text style={styles.yearText}>{year}</Text>
    </View>

    <View style={styles.navigationContainer}>
      <TouchableHighlight onPress={handlePrevMonth}>
        <ChevronLeft width={20} height={20} />
      </TouchableHighlight>
      <TouchableHighlight onPress={handleNextMonth}>
        <ChevronRight width={20} height={20} />
      </TouchableHighlight>
    </View>
  </View>
);
