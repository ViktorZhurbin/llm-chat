import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig(() => {
	return {
		plugins: [
			pluginReact(),
			pluginTypeCheck({ tsCheckerOptions: { devServer: false } }),
		],

		// performance: {
		//   chunkSplit: {
		//     forceSplitting: {
		//       'lib-mantine': /node_modules[\\/]@mantine/,
		//       'lib-tiptap': /node_modules[\\/]@tiptap/,
		//     },
		//   },
		// },
	};
});
