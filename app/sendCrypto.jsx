import { Stack } from "expo-router";
import Common from "../components/common/Common";
import { COLORS } from "../constants";
import {
  VStack,
  Select,
  CheckIcon,
  Text,
  HStack,
  Input,
  Button,
} from "native-base";
import { useState } from "react";

const SendCrypto = () => {
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
            headerTitle: "Send",
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
              accessibilityLabel="Choose asset"
              placeholder="Choose asset"
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
            <Text>Address</Text>
            <Input />
          </VStack>
          <VStack space={1}>
            <Text>Amount</Text>
            <Input />
          </VStack>
          <VStack space={1}>
            <Text>Select Channel</Text>
            <Select
              selectedValue={channel}
              minWidth="200"
              accessibilityLabel="Choose Channel"
              placeholder="Choose Channel"
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
            <HStack justifyContent={"space-between"}>
              <Text color={"gray.400"}>Balance</Text>
              <Text>0.288836748</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"gray.400"}>Minimum Amount</Text>
              <Text>0.288836748</Text>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text color={"gray.400"}>Network Commission</Text>
              <Text>0.288836748</Text>
            </HStack>
          </VStack>
          <VStack mt={8}>
            <Button>Send</Button>
          </VStack>
        </VStack>
      </Common>
    </>
  );
};

export default SendCrypto;
