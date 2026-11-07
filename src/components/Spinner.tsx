import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../theme";

export interface SpinnerProps {
  label?: string;
}

/**
 * Full-area loading state.
 * @example
 * {loading ? <Spinner label="Loading bookings..." /> : <List />}
 */
export function Spinner({ label }: SpinnerProps) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.primary} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    padding: spacing.lg,
  },
  label: { ...typography.body, color: colors.textMuted },
});
