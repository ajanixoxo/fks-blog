import { StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/Rectangle 474.svg")}
            style={styles.image}
          />
        </View>
        <ThemedView style={styles.content}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Choose Your Bike</ThemedText>
            <ButtonContainer>
              <ThemedText type="defaultSemiBold">
                <Ionicons name="search" size={24} color="white" />
              </ThemedText>
            </ButtonContainer>
          </ThemedView>

          <ThemedView style={styles.bikeContainer}>
            <LinearGradient
              colors={["rgba(53, 63, 84, 0.6)", "rgba(34, 40, 52, 0.6)"]}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 0.9, y: 0.9 }}
              style={styles.transformContainer}
            ></LinearGradient>
            <ThemedView style={styles.bikeImageContainer}>
              <Image
                source={require("@/assets/images/electric-bike.png")}
                style={styles.image}
              />
            </ThemedView>
            <ThemedText type="discountText">30% OFF</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 8,
    marginBottom: 8,
    height: "100%",
    position: "relative",
    zIndex: 3,
    marginVertical: 20,
  },
  content: {
    position: "relative",
    zIndex: 2,
    gap: 50,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "transparent",
  },

  imageContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 120,
    left: 0,
    right: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bikeContainer: {
    gap: 8,
    backgroundColor: "transparent",
    height: "auto",
  },
  transformContainer: {
    position: "absolute",
    width: 350,
    height: 280,

    left: 0,
    top: 0,
    borderRadius: 20,
    shadowColor: "rgba(16, 20, 28, 0.6)",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 60,
    elevation: 10,
    zIndex: 0,
    borderColor: "#ffffff53",
    borderWidth: 1,
    backdropFilter: "blur(100px)",
  },
  bikeImageContainer: {
    width: "100%",
    height: 200, // explicit height for the image to be visibl
  },
});
