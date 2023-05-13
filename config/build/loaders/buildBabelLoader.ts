import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader(options: BuildBabelLoaderProps) {
  const { isDev, isTsx } = options;
  const isProd = !isTsx;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
              discardOldKeys: false,
            },
          ],
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
