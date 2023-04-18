import { COLORS, images } from "../constants";
import Common from "../components/common/Common";
import { Stack } from "expo-router";
import {
  Box,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Footer from "../components/footer/footer";

const { width, height } = Dimensions.get("window");

const cryptos = [
  {
    id: 1,
    shortName: "BTC",
    longName: "Bitcoin",
    iconName: "bitcoin",
    color: "success.100",
    image: images.btc,
    trend: "up",
  },
  {
    id: 2,
    shortName: "ETH",
    longName: "Ethereum",
    iconName: "ethereum",
    color: "pink.100",
    image: images.eth,
    trend: "down",
  },
  {
    id: 3,
    shortName: "LTC",
    longName: "Litecoin",
    iconName: "litecoin",
    color: "orange.100",
    image: images.ltc,
    trend: "down",
  },
  {
    id: 4,
    shortName: "DOGE",
    longName: "Dogecoin",
    iconName: "dogecoin",
    color: "teal.100",
    image: images.dogecoin,
    trend: "up",
  },
  {
    id: 5,
    shortName: "SHIBA",
    longName: "Shiba",
    iconName: "shiba",
    color: "blue.100",
    image: images.shiba,
    trend: "down",
  },
];

const Home = () => {
  return (
    <>
      <Common>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
              borderColor: "black",
              borderWidth: 1,
            },
            headerShadowVisible: false,
            headerShown: true,
            headerTitle: () => (
              <VStack h={10}>
                <Text>Welcome</Text>
                <Text fontWeight={"extrabold"}>Rahman</Text>
              </VStack>
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerRight: () => <Icon as={FontAwesome5} name="bell" />,
            headerLeft: () => <Icon as={FontAwesome5} name="bars" />,
            headerBackVisible: false,
          }}
        />
        <ScrollView flexGrow={1} showsVerticalScrollIndicator={false} pb={200}>
          <VStack>
            <View flexDir={"row"} justifyContent={"space-between"}>
              <Text fontWeight={"extrabold"}>Assets</Text>
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
                            <Text color={COLORS.gray}>{item.longName}</Text>
                          </View>
                        </View>
                        <View>
                          <Text fontWeight={"bold"} textAlign={"right"}>
                            $14,378.78
                          </Text>
                          <Text color={"success.700"} textAlign={"right"}>
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
              <Text fontWeight={"extrabold"}>Top movers</Text>
              <Text>See all</Text>
            </View>
            <View mt={3}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={cryptos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Box
                    w={width * 0.4}
                    borderWidth="1"
                    borderColor={COLORS.lightWhite}
                    shadow="1"
                    bg={item.color}
                    px="5"
                    py="2"
                    rounded="10"
                    mr={3}
                  >
                    <VStack space={3}>
                      <Image
                        source={item.image}
                        alt={item.longName}
                        size={30}
                      />
                      <Text fontWeight={"extrabold"} fontSize={12}>
                        {item.shortName} $126.78
                      </Text>
                      <HStack space={3}>
                        <MaterialIcons
                          name={
                            item.trend === "up"
                              ? "trending-up"
                              : "trending-down"
                          }
                          size={25}
                          color={item.trend === "up" ? "green" : "red"}
                        />
                        <Text
                          color={
                            item.trend === "up" ? "success.500" : "error.500"
                          }
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          22%
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                )}
              />
            </View>
          </VStack>
          <VStack mt={5}>
            <View flexDir={"row"} justifyContent={"space-between"}>
              <Text fontWeight={"extrabold"}>Gainers & Losers</Text>
            </View>
            <View mb={30}>
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
                        <Text color={COLORS.gray}>{item.longName}</Text>
                      </View>
                    </View>
                    <View>
                      <Text fontWeight={"bold"} textAlign={"right"}>
                        $14,378.78
                      </Text>
                      <Text color={"success.700"} textAlign={"right"}>
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
      <View position={"relative"}>
        <Footer />
      </View>
    </>
  );
};

export default Home;
