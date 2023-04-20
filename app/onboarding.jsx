import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { COLORS, images } from "../constants";
import { useRouter } from "expo-router";
import ScreenHeader from "../components/header/ScreenHeader";
import { FlatList, Image, Text, View, Button } from "native-base";
import { useRef, useState } from "react";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: images.buySell,
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: images.moneyTransfer,
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: images.marketWoman,
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "4",
    image: images.payForGoodCrypto,
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        alt={item.title}
        source={item?.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View padding={5}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnBoarding = () => {
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

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <Button
                bg={"primary.700"}
                style={styles.btn}
                onPress={() => router.replace("/signup")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  GET STARTED
                </Text>
              </Button>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Button
                borderColor="primary.700"
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.gray,
                  }}
                >
                  SKIP
                </Text>
              </Button>
              <View style={{ width: 15 }} />
              <Button
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
                bg={"primary.700"}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  NEXT
                </Text>
              </Button>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.pureWhite }}>
      <ScreenHeader showHeader={false} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: COLORS.gray,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "black",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default OnBoarding;
