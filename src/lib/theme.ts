import { createTheme } from "@mantine/core";
import { darkPresets } from "./theme-dark";

export const theme = createTheme({
	/** Put your mantine theme override here */
	defaultRadius: "md",
	colors: {
		// https://park-ui.com/react/docs/theme/colors#gray-colors
		dark: darkPresets.mantineDefaultAdjusted,
	},
});
