import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../theme";

export type BadgeTone = "neutral" | "success" | "warning" | "danger" | "info";

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
}

const backgrounds: Record<BadgeTone, string> = {
  neutral: colors.secondary,
  success: colors.successBackground,
  warning: colors.warningBackground,
  danger: colors.dangerBackground,
  info: colors.infoBackground,
};

const textColors: Record<BadgeTone, string> = {
  neutral: colors.textMuted,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.info,
};

/**
 * Small status label for booking states, order states and tags.
 * @example
 * <Badge label="Confirmed" tone="success" />
 */
export function Badge({ label, tone = "neutral" }: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: backgrounds[tone] }]}>
      <Text style={[styles.text, { color: textColors[tone] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 3,
  },
  text: { fontSize: 12, fontWeight: "600" },
});
