import { Button, Box, Progress, FlatList, View } from "native-base";
import Common from "../components/common/Common";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions } from "react-native";
import PersonalInfo from "../components/signup/PersonalInfo";
import SecurityInfo from "../components/signup/SecurityInfo";
import Otp from "../components/signup/Otp";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    component: <PersonalInfo />,
  },
  {
    id: "2",
    component: <SecurityInfo />,
  },
  {
    id: "3",
    component: <Otp />,
  },
];

const Slide = ({ item, nextSlide }) => {
  return (
    <View alignItems={"center"} w={width * 0.9} px={1}>
      {item.component}
      {item.id !== "3" && (
        <Button onPress={nextSlide} mt={5} w="full">
          Next
        </Button>
      )}
    </View>
  );
};

const SignUp = () => {
  const router = useRouter();
  const ref = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  return (
    <Common>
      <Box w="full" mt={50}>
        <Progress
          rounded="0"
          value={Math.floor((100 / slides.length) * (currentSlideIndex + 1))}
          size="xs"
        />
      </Box>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        ItemSeparatorComponent={() => <View style={{ width: 41 }} />}
        renderItem={({ item }) => (
          <Slide item={item} nextSlide={goToNextSlide} />
        )}
        scrollEnabled={false}
      />
    </Common>
  );
};

export default SignUp;
