import Calendar from "@components/calendar/Calendar";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {!fontsLoaded && <ActivityIndicator size="large" color="#0000ff" />}
        {fontsLoaded && <Calendar />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    paddingHorizontal: 24,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "black",
  },
});
