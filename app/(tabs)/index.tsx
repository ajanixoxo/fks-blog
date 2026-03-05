import { StyleSheet, View, ImageBackground } from "react-native";

import ElectricBike from "@/assets/images/electric-bike.svg";
import RectangleBg from "@/assets/images/Rectangle 474.svg";
import TransformedCard from "@/assets/images/transformed-card.svg";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <RectangleBg width="100%" height="100%" />
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

          <ImageBackground
            source={require("@/assets/images/transform.png")}
            style={styles.container}
            imageStyle={styles.bgImage}
          >
            <ElectricBike
              width="100%"
              height="100%"
              style={styles.bikeImageStyle}
            />  
            <ThemedText type="discountText" style={styles.discountText}>30% OFF</ThemedText>
          </ImageBackground>
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
    top: 100,
    left: 0,
    right: 20,
    zIndex: 1,
  },
  container: {
    width: "100%",
    height: 300,
    marginTop:-40
  },

  bgImage: {
    width: "120%",
    height: "100%",
    borderRadius: 20,
    marginLeft: -34,
    
    
  },
  bikeImageContainer: {},
  bikeImageStyle: {
    width: "120%",
    height: "100%",
    marginTop:-20
  },
  discountText: {
    position: "absolute",
    bottom: 25,
    left: 0,
  },
});
