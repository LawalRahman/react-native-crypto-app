import {
  HStack,
  ScrollView,
  Text,
  VStack,
  View,
  Box,
  Center,
} from "native-base";
import Common from "../components/common/Common";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";
import { cryptos } from "./home";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const TransactionHistory = () => {
  const router = useRouter();
  return (
    <>
      <Common footer={false}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: true,
            headerShown: true,
            headerTitle: "Transaction History",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerBackVisible: true,
          }}
        />
        <ScrollView flexGrow={1} showsVerticalScrollIndicator={false} pb={200}>
          <VStack mt={5}>
            <View flexDir={"row"} justifyContent={"space-between"}>
              <Text fontWeight={"extrabold"}>22/03/2023</Text>
            </View>
            <View gap={5} mt={3}>
              {cryptos.map(
                (item, index) =>
                  index < 3 && (
                    <Box
                      key={index}
                      w={"full"}
                      borderWidth="1"
                      borderColor={COLORS.lightWhite}
                      shadow="1"
                      bg={COLORS.lightWhite}
                      px="3"
                      py="2"
                      rounded="5"
                    >
                      <HStack justifyContent={"space-between"}>
                        <View flexDir={"row"} gap={2}>
                          <Center size={50} bg={"error.400"} rounded={"full"}>
                            <MaterialCommunityIcons
                              name="arrow-bottom-left"
                              size={24}
                              color="white"
                            />
                          </Center>
                          <View>
                            <Text fontWeight={"bold"}>{item.shortName}</Text>
                            <Text
                              color={COLORS.gray}
                              textTransform={"uppercase"}
                            >
                              {item.longName}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text fontWeight={"bold"} textAlign={"right"}>
                            $14,378.78
                          </Text>
                          <Text
                            color={
                              item.trend === "up" ? "success.700" : "error.500"
                            }
                            textAlign={"right"}
                          >
                            0.822999
                          </Text>
                        </View>
                      </HStack>
                    </Box>
                  )
              )}
            </View>
          </VStack>
          <VStack mt={5}>
            <View flexDir={"row"} justifyContent={"space-between"}>
              <Text fontWeight={"extrabold"}>22/03/2023</Text>
            </View>
            <View gap={5} mt={3} mb={60}>
              {cryptos.map((item, index) => (
                <Box
                  key={index}
                  w={"full"}
                  borderWidth="1"
                  borderColor={COLORS.lightWhite}
                  shadow="1"
                  bg={COLORS.lightWhite}
                  px="3"
                  py="2"
                  rounded="5"
                >
                  <HStack justifyContent={"space-between"}>
                    <View flexDir={"row"} gap={2}>
                      <Center size={50} bg={"primary.700"} rounded={"full"}>
                        <MaterialCommunityIcons
                          name="arrow-top-right"
                          size={24}
                          color="white"
                        />
                      </Center>
                      <View>
                        <Text fontWeight={"bold"}>{item.shortName}</Text>
                        <Text color={COLORS.gray} textTransform={"uppercase"}>
                          {item.longName}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text fontWeight={"bold"} textAlign={"right"}>
                        $14,378.78
                      </Text>
                      <Text
                        color={
                          item.trend === "up" ? "success.700" : "error.500"
                        }
                        textAlign={"right"}
                      >
                        0.822999
                      </Text>
                    </View>
                  </HStack>
                </Box>
              ))}
            </View>
          </VStack>
        </ScrollView>
      </Common>
    </>
  );
};

export default TransactionHistory;
