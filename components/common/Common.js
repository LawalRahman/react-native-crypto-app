import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/";
import ScreenHeader from "../header/ScreenHeader";
import { View } from "native-base";

const Common = ({ showHeader = false, children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeader showHeader={showHeader} />
      <View
        style={{
          height: "100%",
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Common;
