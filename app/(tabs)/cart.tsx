import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import ButtonContainer from "@/components/ui/button-container";
import { useCartStore } from "@/stores/cart-stores";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TextInput, View } from "react-native";
export default function CartScreen() {
  const cart = useCartStore((state) => state.cart);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);
  const navigation = useNavigation();

  // Calculate dynamic totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 0;
  // Apply 30% discount
  const discountMultiplier = 0.3;
  const discountAmount = subtotal * discountMultiplier;
  const total = subtotal + deliveryFee - discountAmount;

  return (
    <>
      <ParallaxScrollView>
        <View style={styles.container}>
          <View className="flex flex-row items-center gap-[58px]">
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ThemedText type="defaultSemiBold">
                <Ionicons name="chevron-back" size={24} color="white" />
              </ThemedText>
            </ButtonContainer>
            <ThemedText type="title">My Shopping Cart</ThemedText>
          </View>

          <View>
            {cart.map((item) => (
              <View
                key={item.id}
                className="product-container flex flex-row gap-2 items mb-4"
              >
                <LinearGradient
                  colors={["#363E51", "#4C5770"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.productImageContainer}
                >
                  <Image source={item.image} style={styles.productImage} />
                </LinearGradient>
                <View className="product-info flex-col flex gap-8 mt-2">
                  <ThemedText className="product-name" type="productCardTitle">
                    {item.model}
                  </ThemedText>
                  <View className="product-quantity flex flex-row items-center gap-32">
                    <ThemedText
                      type="productCardDescription"
                      className="product-price text-[#3C9EEA]"
                      style={styles.productPrice}
                    >
                      ${item.price.toLocaleString()}
                    </ThemedText>
                    <View className="product-quantity-controls flex flex-row items-center justify-between gap-2">
                      <ButtonContainer
                        onPress={() => increase(item.id)}
                        style={{
                          width: 30,
                          height: 30,
                          padding: 0,
                          paddingHorizontal: 0,
                        }}
                      >
                        <ThemedText type="defaultSemiBold">
                          <Ionicons name="add" size={18} color="white" />
                        </ThemedText>
                      </ButtonContainer>
                      <ThemedText type="defaultSemiBold">
                        {item.quantity}
                      </ThemedText>
                      <ButtonContainer
                        onPress={() => decrease(item.id)}
                        style={{
                          width: 30,
                          height: 30,
                          padding: 0,
                          paddingHorizontal: 0,
                        }}
                      >
                        <ThemedText type="defaultSemiBold">
                          <Ionicons name="remove" size={18} color="white" />
                        </ThemedText>
                      </ButtonContainer>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ParallaxScrollView>

      <View style={styles.subtotalContainer}>
        <ThemedText style={styles.shippingText}>
          Your cart qualifies for free shipping
        </ThemedText>

        <View style={styles.promoContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Bike30"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            value="Bike30"
          />
          <ButtonContainer style={styles.applyButton}>
            <ThemedText style={styles.applyButtonText}>Apply</ThemedText>
          </ButtonContainer>
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Subtotal:</ThemedText>
            <ThemedText style={styles.summaryValue}>
              $
              {subtotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </ThemedText>
          </View>
          <View style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Delivery Fee:</ThemedText>
            <ThemedText style={styles.summaryValue}>${deliveryFee}</ThemedText>
          </View>
          <View style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Discount:</ThemedText>
            <ThemedText style={styles.summaryValue}>30%</ThemedText>
          </View>
          <View style={[styles.summaryRow, { marginTop: 10 }]}>
            <ThemedText style={styles.totalLabel}>Total:</ThemedText>
            <ThemedText style={styles.totalValue}>
              $
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </ThemedText>
          </View>
        </View>

        <View style={styles.checkoutWrapper}>
          <View style={styles.checkoutContainer}>
            <LinearGradient
              colors={["#34C8E8", "#4E4AF2"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.checkoutIcon}
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </LinearGradient>
            <ThemedText style={styles.checkoutText}>Checkout</ThemedText>
            <View style={{ width: 60 }} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 48,
    marginBottom: 8,
    height: "100%",
    position: "relative",
    zIndex: 3,
    paddingHorizontal: 20,
  },
  productImageContainer: {
    width: 100,
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  productImage: {
    width: "100%",
    height: "90%",
    borderRadius: 10,
    objectFit: "contain",
  },
  productPrice: {
    color: "#3C9EEA",
  },
  subtotalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#222834",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  shippingText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
    marginBottom: 20,
  },
  promoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1F2B",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    paddingLeft: 16,
  },
  promoInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  applyButton: {
    width: 100,
    height: 50,
    borderRadius: 15,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryValue: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
  },
  totalLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 18,
    fontWeight: "600",
  },
  totalValue: {
    color: "#34C8E8",
    fontSize: 24,
    fontWeight: "bold",
  },
  checkoutWrapper: {
    marginTop: 10,
    shadowColor: "#10141C",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  checkoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1F2B",
    borderRadius: 20,
    height: 60,
    padding: 5,
    justifyContent: "space-between",
  },
  checkoutIcon: {
    width: 60,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 18,
    fontWeight: "bold",
  },
});
