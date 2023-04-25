import {
  HStack,
  ScrollView,
  Text,
  VStack,
  View,
  Image,
  Box,
  Button,
  Input,
  SearchIcon,
} from "native-base";
import Common from "../components/common/Common";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";
import { cryptos } from "./home";
import { Dimensions } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

const Market = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <>
      <Common active={3} footer={true}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: true,
            headerShown: true,
            headerTitle: "Market",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 15,
            },
            headerBackVisible: false,
          }}
        />
        <ScrollView
          flexGrow={1}
          showsVerticalScrollIndicator={false}
          pb={200}
          mt={5}
        >
          <VStack>
            <Input InputLeftElement={<SearchIcon size={8} px={5} />} />
          </VStack>
          <HStack mt={3} justifyContent={"space-between"}>
            <Button
              w={"24%"}
              borderColor="primary.700"
              activeOpacity={0.8}
              _text={{
                fontSize: 10,
                color: activeFilter === 0 ? "white" : "black",
              }}
              bg={activeFilter === 0 ? "primary.700" : "white"}
              style={[
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => setActiveFilter(0)}
            >
              All Coin
            </Button>

            <Button
              w={"24%"}
              borderColor="primary.700"
              activeOpacity={0.8}
              _text={{
                fontSize: 10,
                color: activeFilter === 1 ? "white" : "black",
              }}
              bg={activeFilter === 1 ? "primary" : "white"}
              style={[
                {
                  borderWidth: 1,
                },
              ]}
              rightIcon={<AntDesign name="arrowup" size={18} color="green" />}
              onPress={() => setActiveFilter(1)}
            >
              Gain
            </Button>
            <Button
              w={"24%"}
              borderColor="primary.700"
              activeOpacity={0.8}
              _text={{
                fontSize: 10,
                color: activeFilter === 2 ? "white" : "black",
              }}
              bg={activeFilter === 2 ? "primary" : "white"}
              style={[
                {
                  borderWidth: 1,
                },
              ]}
              rightIcon={<AntDesign name="arrowdown" size={18} color="red" />}
              onPress={() => setActiveFilter(2)}
            >
              Lose
            </Button>
            <Button
              w={"24%"}
              borderColor="primary.700"
              activeOpacity={0.8}
              _text={{
                fontSize: 10,
                color: activeFilter === 3 ? "white" : "black",
              }}
              bg={activeFilter === 3 ? "primary" : "white"}
              style={[
                {
                  borderWidth: 1,
                },
              ]}
              onPress={() => setActiveFilter(3)}
            >
              New Coin
            </Button>
          </HStack>
          <VStack mt={5}>
            <View gap={5} mt={3}>
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
                    <View justifyContent={"center"} alignItems={"center"}>
                      <MaterialCommunityIcons
                        name={
                          item.trend === "up" ? "trending-up" : "trending-down"
                        }
                        size={30}
                        color={item.trend === "up" ? "green" : "red"}
                      />
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

export default Market;
