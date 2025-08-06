import type { lightTheme, darkTheme } from "@km00776/design-tokens";

declare module "react-native-unistyles" {
  export interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
}
