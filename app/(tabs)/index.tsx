import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, View } from "react-native";

import Bike from "@/assets/images/bike.svg";
import ElectricBike from "@/assets/images/electric-bike.svg";
import Element from "@/assets/images/element.svg";
import Mount from "@/assets/images/mount.svg";
import RectangleBg from "@/assets/images/Rectangle 474.svg";
import Roa from "@/assets/images/roa.svg";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { products } from "@/data/products";
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
            <ThemedText type="discountText" style={styles.discountText}>
              30% OFF
            </ThemedText>
          </ImageBackground>

          <View className="felx flex-col gap-2">
            <View className="flex flex-row  justify-between items-center">
              <ButtonContainer>
                <ThemedText type="defaultSemiBold">All</ThemedText>
              </ButtonContainer>

              <ButtonContainer className="-mt-5" variant="inactive">
                <ThemedText type="defaultSemiBold">
                  <Bike />
                </ThemedText>
              </ButtonContainer>
              <ButtonContainer className="-mt-10" variant="inactive">
                <ThemedText type="defaultSemiBold">
                  <Roa />
                </ThemedText>
              </ButtonContainer>
              <ButtonContainer className="-mt-16" variant="inactive">
                <ThemedText type="defaultSemiBold">
                  <Mount />
                </ThemedText>
              </ButtonContainer>
              <ButtonContainer className="-mt-20" variant="inactive">
                <ThemedText type="defaultSemiBold">
                  <Element />
                </ThemedText>
              </ButtonContainer>
            </View>
            <View className="flex flex-row flex-wrap justify-between  gap-1">
              {products.map((product, index) => (
                <LinearGradient
                  key={product.id}
                  colors={
                    index === 0
                      ? ["#353F54", "#222834"]
                      : ["rgba(54, 62, 81, 0.6)", "rgba(25, 30, 38, 0.6)"]
                  }
                  start={{ x: 0.15, y: 0.1 }}
                  end={{ x: 0.85, y: 0.9 }}
                  style={
                    index === 0
                      ? styles.productCard
                      : styles.productCardSecondary
                  }
                >
                  <View>
                    <Image
                      source={product.image}
                      className="w-12 h-1/2"
                      style={{ width: "90%", height: 90 }}
                    />
                  </View>
                  <View>
                    <ThemedText type="productCardDescription">
                      {product.model}
                    </ThemedText>
                    <ThemedText type="productCardTitle">
                      {product.name}
                    </ThemedText>
                    <ThemedText type="productCardDescription">
                      ${product.price}
                    </ThemedText>
                  </View>
                </LinearGradient>
              ))}
            </View>
          </View>
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
    gap: 0,
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
    top: 10,
    left: 0,
    right: 20,
    zIndex: 1,
  },
  container: {
    width: "100%",
    height: 300,
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
    marginTop: -20,
  },
  discountText: {
    position: "absolute",
    bottom: 25,
    left: 0,
  },
  imageStyle: {
    objectFit: "contain",
  },
  productCard: {
    width: "48%",
    padding: 12,
    gap: 16,
    borderRadius: 20,
    shadowColor: "#10141C",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 10,
    marginBottom: 8,
  },
  productCardSecondary: {
    width: "48%",
    padding: 12,
    gap: 16,
    borderRadius: 20,
    marginBottom: 8,
  },
});
