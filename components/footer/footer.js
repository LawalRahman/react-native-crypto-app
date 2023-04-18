import { FontAwesome5 } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  Text,
} from "native-base";
import { useState } from "react";
import { COLORS } from "../../constants";

function Footer() {
  const [selected, setSelected] = useState(0);
  return (
    <NativeBaseProvider>
      <Box
        width="100%"
        justifyContent="center"
        alignItems={"center"}
        h={40}
        position={"absolute"}
        bottom={-50}
      >
        <HStack
          backgroundColor={"white"}
          justifyContent={"center"}
          alignItems="center"
          safeAreaBottom
          shadow={1}
        >
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            // py="2"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={FontAwesome5}
                name={"home"}
                color={selected === 0 ? "black" : COLORS.gray}
                size="lg"
              />
              <Text color="black" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={FontAwesome5}
                name={"wallet"}
                color={selected === 1 ? "black" : COLORS.gray}
                size="lg"
              />
              <Text color="black" fontSize="12">
                Wallet
              </Text>
            </Center>
          </Pressable>
          {/* <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={FontAwesome5}
                name={"arrow-right-arrow-left"}
                color={selected === 0 ? COLORS.gray : "primary.100"}
                size="sm"
              />
              <Text color="black" fontSize="12">
                Exchange
              </Text>
            </Center>
          </Pressable> */}
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={FontAwesome5}
                name={"chart-line"}
                color={selected === 3 ? "black" : COLORS.gray}
                size="lg"
              />
              <Text color="black" fontSize="12">
                Market
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 4 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(4)}
          >
            <Center>
              <Icon
                mb="1"
                as={FontAwesome5}
                name={"user"}
                color={selected === 4 ? "black" : COLORS.gray}
                size="lg"
              />
              <Text color="black" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Footer;
