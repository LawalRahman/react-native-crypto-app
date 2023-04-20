import {
  FormControl,
  VStack,
  Text,
  HStack,
  Button,
  Icon,
  Flex,
  Box,
} from "native-base";
import Common from "../components/common/Common";
import Input from "../components/Input/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "../constants";

const Login = () => {
  const router = useRouter();
  return (
    <Common>
      <Text fontSize={20} textAlign={"center"} mt={100}>
        Welcome Back,{" "}
        <Text fontWeight={"extrabold"} fontSize={30}>
          Rahman
        </Text>
      </Text>
      <FormControl mt={50}>
        <VStack space={5}>
          <VStack>
            <Input p={2} placeholder="Username" />
          </VStack>
          <VStack>
            <Input type="password" p={2} placeholder="Password" />
          </VStack>
          <HStack w="full" space={2} justifyContent={"flex-end"}>
            <Text fontSize={10} onPress={() => router.push("/signup")}>
              Forgot Password ?
            </Text>
            <Icon as={FontAwesome5} name={"arrow-right"} />
          </HStack>
          <Button onPress={() => router.push("home")}>Log In</Button>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w="full"
            mt={10}
          >
            <Icon
              color={"primary.700"}
              as={FontAwesome5}
              name={"fingerprint"}
              size={10}
            />
          </Flex>
        </VStack>
      </FormControl>
      <Box mt={150}>
        <Button
          bottom={0}
          borderColor="primary.700"
          activeOpacity={0.8}
          style={[
            {
              borderWidth: 1,
              backgroundColor: "transparent",
            },
          ]}
          onPress={() => router.push("signup")}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: COLORS.gray,
            }}
          >
            New here? Sign Up
          </Text>
        </Button>
      </Box>
    </Common>
  );
};

export default Login;
