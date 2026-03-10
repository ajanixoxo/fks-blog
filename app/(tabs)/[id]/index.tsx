import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { products } from "@/data/products";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {  useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const { width } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((product) => product.id === id);
  if (!product) {
    return (
      <ThemedView>
        <ThemedText>Product not found</ThemedText>
      </ThemedView>
    );
  }
  const data = [product.image, product.image];
  const tabs = ["Description", "Specifications"];
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.mainContainer}>
        <ThemedView style={styles.content}>
          <ThemedView style={styles.titleContainer}>
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ThemedText type="defaultSemiBold">
                <Ionicons name="chevron-back" size={24} color="white" />
              </ThemedText>
            </ButtonContainer>
            <ThemedText type="title">{product.model}</ThemedText>
          </ThemedView>

          <View style={styles.productContainer}>
            <Carousel
              width={width}
              height={400}
              data={data}
              scrollAnimationDuration={1000}
              renderItem={({ item }) => (
                <Image source={item} style={styles.productImage} />
              )}
            />

            <LinearGradient
              colors={["#353F54", "#222834"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.descriptionContainer}
            >
              <View style={styles.tabsContainer}>
                {tabs.map((tab, index) => (
                  <Pressable
                    key={index}
                    onPress={() => setActiveTab(tab)}
                    style={
                      activeTab === tab ? styles.activeTab : styles.inactiveTab
                    }
                  >
                    <ThemedText
                      type="defaultSemiBold"
                      style={
                        activeTab === tab
                          ? styles.activeTabText
                          : styles.inactiveTabText
                      }
                    >
                      {tab}
                    </ThemedText>
                  </Pressable>
                ))}
              </View>
              <View style={styles.tabContent}>
                {activeTab === "Description" && (
                  <View>
                    <ThemedText style={styles.tabTextTitle}>
                      {product.model}
                    </ThemedText>
                    <ThemedText style={styles.tabText}>
                      {product.description}
                    </ThemedText>
                  </View>
                )}
                {activeTab === "Specifications" && (
                  <ThemedText style={styles.tabText}>
                    {product.specifications}
                  </ThemedText>
                )}
              </View>
              <View style={styles.bottomBar}>
                <View style={styles.priceContainer}>
                  <ThemedText style={styles.priceLabel}>Price</ThemedText>
                  <ThemedText style={styles.priceValue}>
                    ${product.price.toLocaleString()}
                  </ThemedText>
                </View>
                <ButtonContainer style={styles.addToCartButton}>
                  <ThemedText style={styles.addToCartText}>
                    Add to Cart
                  </ThemedText>
                </ButtonContainer>
              </View>
            </LinearGradient>
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
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    gap: 48,
    backgroundColor: "transparent",
  },
  productContainer: {
    width: "100%",
    height: "70%",
    position: "relative",
    zIndex: 1,
  },
  productImage: {
    width: "90%",
    height: "60%",
    marginTop: 20,
    marginLeft: 20,
  },
  descriptionContainer: {
    width: "100%",
    height: 450,
    marginTop: -70,
    borderRadius: 30,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -20 },
    shadowOpacity: 0.25,
    shadowRadius: 60,
    elevation: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  activeTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 133,
    height: 43,
    backgroundColor: "#323B4F",
    borderRadius: 10,
    shadowColor: "#252B39",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
  },
  inactiveTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 142,
    height: 43,
    backgroundColor: "#28303F",
    borderRadius: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: "#202633",
    borderLeftColor: "#202633",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "#364055",
    borderRightColor: "#364055",
  },
  activeTabText: {
    color: "#4286EE",
    fontSize: 15,
  },
  inactiveTabText: {
    color: "rgba(255, 255, 255, 0.6)",
  },
  tabContent: {
    marginTop: 10,
  },
  tabTextTitle: {
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 24,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 10,
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 24,
    fontSize: 18,
    fontWeight: "400",
  },
  bottomBar: {
    position: "absolute",
    bottom: 50,
    right: 0,
    left: 0,
    zIndex: 2,
    height: 100,
    backgroundColor: "#222834",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  priceContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  priceLabel: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    marginBottom: 4,
  },
  priceValue: {
    color: "#3D9CEA",
    fontSize: 24,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#34C8E8", // A fallback color; ButtonContainer already handles the linear gradient
    width: 160,
    height: 50,
    borderRadius: 15,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
