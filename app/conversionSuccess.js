import { Center, Icon, Text, Button } from "native-base";
import Common from "../components/common/Common";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const conversionSuccess = () => {
  const router = useRouter();
  return (
    <Common>
      <Text fontSize={30} textAlign={"center"} mt={50}>
        Conversion Success
      </Text>
      <Center w="full" h={"70%"} gap={10}>
        <Icon
          as={FontAwesome5}
          name="check-circle"
          size={200}
          color={"primary.700"}
        />
        <Text>Success, your crypto swap has been completed!</Text>
        <Button
          w="full"
          color={"primary.700"}
          onPress={() => router.replace("home")}
        >
          Continue
        </Button>
      </Center>
    </Common>
  );
};

export default conversionSuccess;
