import type { UserConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default (): UserConfig => {
  return {
    plugins: [reactRefresh()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
    },
  };
};
