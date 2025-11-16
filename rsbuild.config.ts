import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig(({ env }) => {
  const isDev = env === 'development';

  // https://rsbuild.dev/config/output/css-modules#template-string
  const localIdentName = isDev
    ? '[folder]__[local]-[hash:base64:6]'
    : '[local]-[hash:base64:6]';

  return {
    html: {
      template: './static/index.html',
    },

    plugins: [pluginReact(), pluginTypeCheck()],

    output: {
      cssModules: {
        localIdentName,
      },
    },

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
