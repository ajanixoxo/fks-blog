import { StyleSheet, View } from "react-native";
import ElectricBike from "@/assets/images/electric-bike.svg";
import RectangleBg from "@/assets/images/Rectangle 474.svg";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ButtonContainer from "@/components/ui/button-container";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);
  if(!product){
    return (
        <ThemedView>
            <ThemedText>Product not found</ThemedText>
        </ThemedView>
    )
  };
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.mainContainer}>
        
        <ThemedView style={styles.content}>
          <ThemedView style={styles.titleContainer}> 
            <ButtonContainer>
              <ThemedText type="defaultSemiBold">
                <Ionicons name="chevron-back" size={24} color="white" />
              </ThemedText>
            </ButtonContainer>
            <ThemedText type="title">{product.model}</ThemedText>
           
          </ThemedView>

   <View style={styles.productContainer}>

 
          <Image
            source={product.image}
         
            style={styles.productImage}
          />
            {/* <ElectricBike
              width="100%"
              height="100%"
            //   style={styles.bikeImageStyle}
            /> */}
           
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
  },
});
