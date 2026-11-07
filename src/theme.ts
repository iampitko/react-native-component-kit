/**
 * Single source of design tokens for the whole kit.
 * Agents: change colors and spacing HERE, never hardcode them in components.
 */
export const colors = {
  primary: "#111827",
  primaryText: "#FFFFFF",
  secondary: "#F3F4F6",
  background: "#FFFFFF",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  text: "#111827",
  textMuted: "#6B7280",
  danger: "#DC2626",
  dangerBackground: "#FEF2F2",
  success: "#16A34A",
  successBackground: "#F0FDF4",
  warning: "#D97706",
  warningBackground: "#FFFBEB",
  info: "#2563EB",
  infoBackground: "#EFF6FF",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 999,
} as const;

export const typography = {
  title: { fontSize: 24, fontWeight: "700" as const },
  heading: { fontSize: 18, fontWeight: "600" as const },
  body: { fontSize: 15, fontWeight: "400" as const },
  caption: { fontSize: 13, fontWeight: "400" as const },
  button: { fontSize: 15, fontWeight: "600" as const },
};
