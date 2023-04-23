import { Stack } from "expo-router";
import Common from "../components/common/Common";
import { COLORS } from "../constants";
import {
  VStack,
  Select,
  CheckIcon,
  Text,
  HStack,
  Center,
  Box,
} from "native-base";
import { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const ReceiveCrypto = () => {
  const [asset, setAsset] = useState("");
  const [channel, setChannel] = useState("");
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
            headerTitle: "Receive",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerBackVisible: true,
          }}
        />
        <VStack mt={5} space={3}>
          <VStack space={1}>
            <Text>Select Asset</Text>
            <Select
              selectedValue={asset}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                // bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setAsset(itemValue)}
            >
              <Select.Item label="BTC" value="btc" />
              <Select.Item label="Ethereum" value="eth" />
              <Select.Item label="Doge Coin" value="doge" />
              <Select.Item label="Lite Coin" value="LTC" />
            </Select>
          </VStack>
          <VStack space={1}>
            <Text>Select Channel</Text>
            <Select
              selectedValue={channel}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                // bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setChannel(itemValue)}
            >
              <Select.Item label="Channel 1" value="ch1" />
              <Select.Item label="Channel 2" value="ch2" />
              <Select.Item label="Channel 3" value="ch3" />
            </Select>
          </VStack>
          <VStack space={2} mt={5}>
            <Text>Address</Text>
            <HStack justifyContent={"space-between"}>
              <Text>sahkhhhkhjkdshakhjhjhjkheqwhjkhwq</Text>
              <MaterialIcons name="content-copy" size={24} color="black" />
            </HStack>
          </VStack>
          <Center w="full" mt={5}>
            <Box borderWidth={1} borderColor={"gray.300"} rounded={10}>
              <MaterialCommunityIcons name="qrcode" size={250} color="black" />
            </Box>
          </Center>
          <VStack mt={8}>
            <Text fontSize={16}>Tips:</Text>
            <Text fontSize={12}>
              Depositing into the above address needs confirmation of the entire
              network. Asset will arrive after confirmation
            </Text>
          </VStack>
        </VStack>
      </Common>
    </>
  );
};

export default ReceiveCrypto;
