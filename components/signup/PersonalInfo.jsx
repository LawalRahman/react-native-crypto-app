import { Flex, FormControl, Text, VStack } from "native-base";
import CountrySelector from "../countrySelector/CountrySelector";
import Input from "../Input/Input";

const PersonalInfo = () => {
  return (
    <>
      <Text fontSize={30} textAlign={"center"} mt={50}>
        Personal Information
      </Text>
      <FormControl mt={50}>
        <VStack space={5}>
          <VStack>
            <Input p={2} placeholder="Username" />
          </VStack>
          <VStack>
            <Input p={2} placeholder="Email" />
          </VStack>
          <VStack>
            <Flex direction="row" gap={2}>
              <Flex flex={1}>
                <CountrySelector />
              </Flex>
              <Flex flex={3}>
                <Input p={2} placeholder="Phone Number" />
              </Flex>
            </Flex>
          </VStack>
        </VStack>
      </FormControl>
    </>
  );
};

export default PersonalInfo;
