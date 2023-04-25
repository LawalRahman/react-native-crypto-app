import {
  HStack,
  ScrollView,
  Text,
  VStack,
  View,
  Image,
  Box,
  Button,
} from "native-base";
import Common from "../components/common/Common";
import { Stack, useRouter } from "expo-router";
import { COLORS, images } from "../constants";
import { Dimensions } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Account = () => {
  const router = useRouter();
  return (
    <>
      <Common active={4} footer={true}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: true,
            headerShown: true,
            headerTitle: "Account",
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
          <Box px="5" py="5">
            <VStack>
              <View justifyContent={"center"} alignItems={"center"} gap={2}>
                <Image
                  borderColor={"gray.400"}
                  borderWidth={1}
                  rounded={10}
                  source={images.avatar}
                  alt="profile-picture"
                  size={100}
                />
                <Text fontWeight={"extrabold"}>rahman.lawal</Text>
                <Text>rahmanabimbina@gmail.com</Text>
              </View>
            </VStack>
          </Box>
          <VStack mt={5} space={1}>
            <Box
              w={"full"}
              borderWidth="1"
              borderColor={"gray.200"}
              shadow="1"
              bg={COLORS.lightWhite}
              px="3"
              py="3"
              rounded="10"
            >
              <HStack justifyContent={"space-between"}>
                <View flexDir={"row"} gap={2}>
                  <MaterialIcons name="verified" size={24} color="black" />
                  <Text>Verification</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </HStack>
            </Box>
            <Box
              w={"full"}
              borderWidth="1"
              borderColor={"gray.200"}
              shadow="1"
              bg={COLORS.lightWhite}
              px="3"
              py="3"
              rounded="10"
            >
              <HStack justifyContent={"space-between"}>
                <View flexDir={"row"} gap={2}>
                  <MaterialIcons name="security" size={24} color="black" />
                  <Text>Security</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </HStack>
            </Box>
            <Box
              w={"full"}
              borderWidth="1"
              borderColor={"gray.200"}
              shadow="1"
              bg={COLORS.lightWhite}
              px="3"
              py="3"
              rounded="10"
            >
              <HStack justifyContent={"space-between"}>
                <View flexDir={"row"} gap={2}>
                  <Ionicons name="person-add" size={24} color="black" />
                  <Text>Refer</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </HStack>
            </Box>
            <Box
              w={"full"}
              borderWidth="1"
              borderColor={"gray.200"}
              shadow="1"
              bg={COLORS.lightWhite}
              px="3"
              py="3"
              rounded="10"
            >
              <HStack justifyContent={"space-between"}>
                <View flexDir={"row"} gap={2}>
                  <Ionicons name="settings" size={24} color="black" />
                  <Text>Settings</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </HStack>
            </Box>
            <Box
              w={"full"}
              borderWidth="1"
              borderColor={"gray.200"}
              shadow="1"
              bg={COLORS.lightWhite}
              px="3"
              py="3"
              rounded="10"
            >
              <HStack justifyContent={"space-between"}>
                <View flexDir={"row"} gap={2}>
                  <MaterialIcons
                    name="contact-support"
                    size={24}
                    color="black"
                  />
                  <Text>Help and Support</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </HStack>
            </Box>
          </VStack>
          <View justifyContent={"center"} alignItems={"center"} mt={8}>
            <Button w={"1/3"} onPress={() => router.replace("login")}>
              Logout
            </Button>
          </View>
        </ScrollView>
      </Common>
    </>
  );
};

export default Account;
