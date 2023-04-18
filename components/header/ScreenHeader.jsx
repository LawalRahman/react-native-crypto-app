import { Stack } from "expo-router";
import { COLORS } from "../../constants";

const ScreenHeader = ({ showHeader = true }) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: true,
          headerShown: showHeader,
          headerTitle: "",
        }}
      />
    </>
  );
};

export default ScreenHeader;
