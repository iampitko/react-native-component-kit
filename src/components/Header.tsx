import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../theme";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  /** Shows a back arrow when provided. */
  onBack?: () => void;
  /** Optional right-side action label, e.g. "Edit". */
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Screen header with optional back button and right action.
 * @example
 * <Header title="Bookings" subtitle="3 this week" onBack={goBack} />
 */
export function Header({ title, subtitle, onBack, actionLabel, onAction }: HeaderProps) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {onBack && (
          <Pressable onPress={onBack} hitSlop={8} accessibilityRole="button" accessibilityLabel="Back">
            <Text style={styles.back}>←</Text>
          </Pressable>
        )}
        <View>
          <Text style={typography.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      {actionLabel && onAction && (
        <Pressable onPress={onAction} hitSlop={8} accessibilityRole="button">
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  left: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  back: { fontSize: 22, color: colors.text },
  subtitle: { ...typography.caption, color: colors.textMuted },
  action: { ...typography.body, color: colors.info, fontWeight: "600" },
});
