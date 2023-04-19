import { Center, Icon, Text, Button } from "native-base";
import Common from "../components/common/Common";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const verificationSuccess = () => {
  const router = useRouter();
  return (
    <Common>
      <Text fontSize={30} textAlign={"center"} mt={50}>
        Verification Success
      </Text>
      <Center w="full" h={"70%"} gap={10}>
        <Icon
          as={FontAwesome5}
          name="check-circle"
          size={200}
          color={"primary.700"}
        />
        <Text>
          Congratulations, your account is now ready to be used. You can start
          sending crypto of your choice!
        </Text>
        <Button
          w="full"
          color={"primary.700"}
          onPress={() => router.replace("home")}
        >
          Start Now
        </Button>
      </Center>
    </Common>
  );
};

export default verificationSuccess;
