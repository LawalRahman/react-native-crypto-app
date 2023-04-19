import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/";
import ScreenHeader from "../header/ScreenHeader";
import { View } from "native-base";
import Footer from "../footer/footer";

const Common = ({
  children,
  active = 0,
  showHeader = false,
  isAuth = false,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeader showHeader={showHeader} />
      <View
        style={{
          height: "100%",
          paddingHorizontal: 20,
          // paddingBottom: 40,
        }}
      >
        {children}
      </View>
      {isAuth && (
        <View position={"relative"}>
          <Footer active={active} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Common;
