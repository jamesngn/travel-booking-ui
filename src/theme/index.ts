import { createTheme, Drawer } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Manrope, sans-serif",
  colors: {
    green: [
      "#dff7df",
      "#96eb99",
      "#6ade72",
      "#43d151",
      "#1fc435",
      "#00b71f",
      "#00911d",
      "#006b19",
      "#004512",
      "#001f09",
    ],
  },
  primaryShade: 5,
  primaryColor: "green",
  cursorType: "pointer",
  components: {
    Drawer: Drawer.extend({
      defaultProps: {
        position: "right",
        padding: 24,
        overlayProps: { backgroundOpacity: 0.5, blur: 4 },
      },
    }),
  },
});
