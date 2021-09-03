import type { UserConfig } from 'vite';
import { resolve } from 'path';

import { createPluginVite } from './build/vite';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default (): UserConfig => {
  return {
    plugins: createPluginVite(),
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
};
