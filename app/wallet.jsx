import {
  HStack,
  ScrollView,
  Text,
  VStack,
  View,
  Image,
  Box,
  Center,
} from "native-base";
import Common from "../components/common/Common";
import { Stack } from "expo-router";
import { COLORS } from "../constants";
import { cryptos } from "./home";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Wallet = () => {
  return (
    <>
      <Common active={1} isAuth={true}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: true,
            headerShown: true,
            headerTitle: "Wallet",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerBackVisible: false,
          }}
        />
        <ScrollView flexGrow={1} showsVerticalScrollIndicator={false} pb={200}>
          <Box
            borderWidth="1"
            borderColor={COLORS.lightWhite}
            shadow="1"
            bg={"primary.700"}
            px="5"
            py="5"
            rounded="10"
            maxH={"2/6"}
          >
            <HStack>
              <VStack space={2}>
                <Text color={"white"}>Total Value(BTC)</Text>
                <Text color={"white"} fontWeight={"extrabold"} fontSize={"2xl"}>
                  3.6672889839
                </Text>
                <HStack space={2}>
                  <Text color={"white"}>= $33.6672889839</Text>
                  <Text color={"white"}>(+22%)</Text>
                </HStack>
              </VStack>
              <Center w="2/6">
                <MaterialCommunityIcons
                  name="trending-up"
                  size={100}
                  color="white"
                />
              </Center>
            </HStack>
          </Box>
          <VStack mt={5}>
            <View flexDir={"row"} justifyContent={"space-between"}>
              <Text fontWeight={"extrabold"}>Transaction History</Text>
              <Text>View all</Text>
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
                          <Image
                            source={item.image}
                            alt={item.longName}
                            size={50}
                          />
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
              <Text fontWeight={"extrabold"}>Assets</Text>
              <Text>View all</Text>
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
                      <Image
                        source={item.image}
                        alt={item.longName}
                        size={50}
                      />
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

export default Wallet;
