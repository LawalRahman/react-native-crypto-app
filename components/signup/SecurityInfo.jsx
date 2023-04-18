import { FormControl, Text, VStack } from "native-base";
import Input from "../Input/Input";

const SecurityInfo = () => {
  return (
    <>
      <Text fontSize={30} textAlign={"center"} mt={50}>
        Password
      </Text>
      <FormControl mt={50}>
        <VStack space={5}>
          <VStack>
            <Input type="password" p={2} placeholder="Password" />
          </VStack>
          <VStack>
            <Input type="password" p={2} placeholder="Confirm Password" />
          </VStack>
        </VStack>
      </FormControl>
    </>
  );
};

export default SecurityInfo;
