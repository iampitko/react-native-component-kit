import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { colors, radius, spacing } from "../theme";

export interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

/**
 * Surface container for grouped content.
 * @example
 * <Card><Text>Booking #12</Text></Card>
 */
export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
});
