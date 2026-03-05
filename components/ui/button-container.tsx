import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, type PressableProps } from "react-native";

type ButtonVariant = "active" | "inactive";

const GRADIENT_COLORS: Record<ButtonVariant, [string, string]> = {
  active: ["#34C8E8", "#4E4AF2"],
  inactive: ["#353F54", "#222834"],
};

interface ButtonContainerProps extends PressableProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const ButtonContainer = ({
  children,
  style,
  variant = "active",
  ...props
}: ButtonContainerProps) => {
  return (
    <Pressable style={style} {...props}>
      <LinearGradient
        colors={GRADIENT_COLORS[variant]}
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
    height: 60,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
  },
});
