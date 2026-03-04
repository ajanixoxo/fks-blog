import { Platform, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { ThemeContext } from "@react-navigation/native";
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
      </ThemedView>
     
   </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    gap: 8,
    marginBottom: 8,
    height: "100%",
    position: "relative",
    zIndex: 3,
  },
  content:{
    position: "relative",
    zIndex: 2,
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
    position: "absolute",
    zIndex: 1,
    right: -50,

  },
});
