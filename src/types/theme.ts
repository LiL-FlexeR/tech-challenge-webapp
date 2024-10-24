import { Palette, Theme, PaletteColor } from "@mui/material";

export type TColor = {
  [K in keyof Palette]: Palette[K] extends PaletteColor ? K : never;
}[keyof Palette];

export type TTheme = Theme;
