import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../theme";

export interface ListItemProps {
  title: string;
  subtitle?: string;
  /** Right-aligned value, e.g. a price or a time. */
  rightText?: string;
  onPress?: () => void;
}

/**
 * Tappable row for lists: bookings, services, settings.
 * Renders a plain view when no onPress is given.
 * @example
 * <ListItem title="Deep cleaning" subtitle="Sat 9:00 AM" rightText="$180" onPress={open} />
 */
export function ListItem({ title, subtitle, rightText, onPress }: ListItemProps) {
  const content = (
    <>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {rightText && <Text style={styles.right}>{rightText}</Text>}
      {onPress && <Text style={styles.chevron}>›</Text>}
    </>
  );

  if (!onPress) {
    return <View style={styles.row}>{content}</View>;
  }
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  pressed: { opacity: 0.6 },
  texts: { flex: 1, gap: 2 },
  title: { ...typography.body, fontWeight: "500", color: colors.text },
  subtitle: { ...typography.caption, color: colors.textMuted },
  right: { ...typography.body, fontWeight: "600", color: colors.text },
  chevron: { fontSize: 20, color: colors.textMuted },
});
