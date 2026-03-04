import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, type PressableProps } from "react-native";

interface ButtonContainerProps extends PressableProps {
  children: React.ReactNode;
}

const ButtonContainer = ({
  children,
  style,
  ...props
}: ButtonContainerProps) => {
  return (
    <Pressable style={style} {...props}>
      <LinearGradient
        colors={["#34C8E8", "#4E4AF2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        {children}
      </LinearGradient>
    </Pressable>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "auto",
    height: 44,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // React Native doesn't support multiple intricate drop shadows perfectly like CSS,
    // but this provides a good approximation of the desired effect:
    shadowColor: "#10141C",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
});
