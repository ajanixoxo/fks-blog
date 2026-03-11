import { View, Text, Pressable, StyleSheet } from "react-native";
import { useCartStore } from "@/stores/cart-stores";
import ButtonContainer from "@/components/ui/button-container";
import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const cart = useCartStore((state) => state.cart);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);
  const navigation = useNavigation();

  return (
    <ParallaxScrollView>
    <View style={styles.container}>
      <View className="flex">
        <ButtonContainer onPress={() => navigation.goBack()}>
          <ThemedText type="defaultSemiBold">
            <Ionicons name="chevron-back" size={24} color="white" />
          </ThemedText>
        </ButtonContainer>
        <ThemedText type="title">My Cart</ThemedText>
      </View>

      {cart.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable onPress={() => decrease(item.id)}>
              <Text>-</Text>
            </Pressable>

            <Text>{item.quantity}</Text>

            <Pressable onPress={() => increase(item.id)}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  gap: 8,
  marginBottom: 8,
  height: "100%",
  position: "relative",
  zIndex: 3,
 }
});
