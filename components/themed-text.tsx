import { StyleSheet, Text, type TextProps } from 'react-native';
import { Colors } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'discountText' | 'productCardTitle' | 'productCardDescription';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'discountText' ? styles.discountText : undefined,
        type === 'productCardTitle' ? styles.productCardTitle : undefined,
        type === 'productCardDescription' ? styles.productCardDescription : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  productCardTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  productCardDescription:{
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 22,
   
  },
  discountText:{
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff85',
    padding: 16,
  }
});
