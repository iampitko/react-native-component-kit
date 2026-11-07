import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export interface AvatarProps {
  /** Full name, used for initials when there is no image. */
  name: string;
  imageUrl?: string;
  size?: number;
}

/**
 * Round avatar: photo when available, initials otherwise.
 * @example
 * <Avatar name="Yaroslav Pitko" imageUrl="https://example.com/me.jpg" />
 */
export function Avatar({ name, imageUrl, size = 48 }: AvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  if (imageUrl) {
    return (
      <Image
        source={{ uri: imageUrl }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        accessibilityLabel={name}
      />
    );
  }

  return (
    <View
      style={[
        styles.fallback,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.initials, { fontSize: size * 0.38 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: { fontWeight: "600", color: colors.text },
});
