import {
  Box,
  HStack,
  Input,
  Text,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  Image,
  ChevronDownIcon,
  Center,
  Button,
} from "native-base";
import Common from "../components/common/Common";
import { Stack, useRouter } from "expo-router";
import { COLORS, images } from "../constants";
import { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";

const Swap = () => {
  const router = useRouter();
  const [position, setPosition] = useState("btc");
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  return (
    <>
      <Common>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: true,
            headerShown: true,
            headerTitle: "Exchange",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerBackVisible: false,
          }}
        />
        <VStack mt={3} space={3}>
          <Box
            borderWidth="1"
            borderColor={COLORS.lightWhite}
            shadow="1"
            bg={"primary.600"}
            px="5"
            py="5"
            rounded="10"
            // maxH={"2/6"}
          >
            <VStack space={1}>
              <HStack justifyContent={"space-between"}>
                <VStack>
                  <FormControl>
                    <VStack w="200" color={"white"} space={1}>
                      <Text style={{ color: COLORS.white }} fontSize={12}>
                        From
                      </Text>
                      <Input
                        keyboardType="numeric"
                        bg={"white"}
                        color={"black"}
                        _focus={{
                          bg: "white",
                        }}
                        px={2}
                        InputRightElement={
                          <Box
                            h={8}
                            w={12}
                            justifyContent={"center"}
                            alignItems={"center"}
                            mx={2}
                          >
                            <Text color={COLORS.gray}>Max</Text>
                          </Box>
                        }
                      />

                      <Text color={"white"} fontSize={"10"}>
                        Available: 100 USDT
                      </Text>
                    </VStack>
                  </FormControl>
                </VStack>
                <HStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  space={1}
                >
                  <Image source={images.btc} alt="from" size={5} />
                  <Select
                    color="white"
                    width={"20"}
                    h={8}
                    borderWidth={0}
                    selectedValue={position}
                    mx={{
                      base: 0,
                      md: "auto",
                    }}
                    onValueChange={(nextValue) => setPosition(nextValue)}
                    _selectedItem={{
                      bg: "primary.600",
                      endIcon: <CheckIcon size={1} color="black" />,
                    }}
                    accessibilityLabel="Select a position for Menu"
                    dropdownIcon={<ChevronDownIcon size={3} color={"white"} />}
                  >
                    <Select.Item label="BTC" value="btc" />
                    <Select.Item label="DOGE" value="doge" />
                    <Select.Item label="ETH" value="eth" />
                    <Select.Item label="SHIBA" value="shiba" />
                  </Select>
                </HStack>
              </HStack>
              <Center alignItems={"flex-end"}>
                <Box
                  backgroundColor={"white"}
                  w={"8"}
                  h={"8"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  rounded={"full"}
                  style={{ transform: "rotate(90deg)" }}
                >
                  <Octicons name="arrow-switch" size={16} color="black" />
                </Box>
              </Center>
              <HStack justifyContent={"space-between"}>
                <VStack>
                  <FormControl>
                    <VStack w="200" color={"white"} space={1}>
                      <Text style={{ color: COLORS.white }} fontSize={12}>
                        To
                      </Text>
                      <Input
                        keyboardType="numeric"
                        bg={"white"}
                        color={"black"}
                        _focus={{
                          bg: "white",
                        }}
                        px={2}
                      />
                    </VStack>
                  </FormControl>
                </VStack>
                <HStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  space={1}
                  mt={5}
                >
                  <Image source={images.btc} alt="from" size={5} />
                  <Select
                    color="white"
                    width={"20"}
                    h={8}
                    borderWidth={0}
                    selectedValue={position}
                    mx={{
                      base: 0,
                      md: "auto",
                    }}
                    onValueChange={(nextValue) => setPosition(nextValue)}
                    _selectedItem={{
                      bg: "primary.600",
                      endIcon: <CheckIcon size={1} color="black" />,
                    }}
                    accessibilityLabel="Select a position for Menu"
                    dropdownIcon={<ChevronDownIcon size={3} color={"white"} />}
                  >
                    <Select.Item label="BTC" value="btc" />
                    <Select.Item label="DOGE" value="doge" />
                    <Select.Item label="ETH" value="eth" />
                    <Select.Item label="SHIBA" value="shiba" />
                  </Select>
                </HStack>
              </HStack>
            </VStack>
          </Box>
          <Button onPress={toggleBottomNavigationView} mt={350}>
            Preview Conversion
          </Button>
        </VStack>
      </Common>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <VStack bg={"white"} borderTopRadius={30} py={10} space={10}>
          <Text textAlign={"center"} fontSize={25} fontWeight={"extrabold"}>
            Confirm Conversion
          </Text>
          <HStack justifyContent={"space-between"} px={5}>
            <VStack space={2}>
              <Text>From</Text>
              <HStack space={1}>
                <Image source={images.btc} alt="from" size={5} />
                <Text>BTC</Text>
              </HStack>
              <Text>55 BTC</Text>
            </VStack>
            <Center>
              <Box
                backgroundColor={"primary.600"}
                w={"10"}
                h={"10"}
                justifyContent={"center"}
                alignItems={"center"}
                rounded={"full"}
              >
                <Octicons name="arrow-switch" size={16} color="white" />
              </Box>
            </Center>
            <VStack space={2} alignItems={"flex-end"}>
              <Text>To</Text>
              <HStack space={1}>
                <Image source={images.eth} alt="from" size={5} />
                <Text>ETH</Text>
              </HStack>
              <Text>55 ETH</Text>
            </VStack>
          </HStack>
          <VStack
            background={"coolGray.100"}
            justifyContent={"center"}
            px={5}
            py={3}
            space={5}
            // alignItems={"center"}
          >
            <HStack justifyContent={"space-between"}>
              <Box h={10} alignItems={"center"} justifyContent={"center"}>
                <Text>Transaction fee</Text>
              </Box>
              <Box
                w={20}
                h={10}
                bg={"primary.600"}
                rounded={10}
                justifyContent={"center"}
                alignItems={"center"}
                _text={{ color: "white" }}
              >
                No Fee
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text>Rate</Text>
              <Text>1 ETH = 0.2736 BTC</Text>
            </HStack>
          </VStack>
          <HStack justifyContent={"space-between"} px={5}>
            <Button
              w="48%"
              colorScheme="coolGray.300"
              _text={{ color: "black" }}
              onPress={toggleBottomNavigationView}
              _focus={{ color: "coolGray.300" }}
            >
              Cancel
            </Button>
            <Button w="48%" onPress={() => router.replace("conversionSuccess")}>
              Convert
            </Button>
          </HStack>
        </VStack>
      </BottomSheet>
    </>
  );
};

export default Swap;
