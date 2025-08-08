// declarations.d.ts (and ensure tsconfig includes **/*.d.ts)
import type { Theme } from "@km00776/design-tokens";

declare module "react-native-unistyles" {
  interface UnistylesThemes {
    light: Theme;
    dark: Theme;
  }
}
