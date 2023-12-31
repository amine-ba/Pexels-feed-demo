module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          components: './src/components',
          styles: './src/styles',
          utils: './src/utils',
          hooks: './src/hooks',
          assets: './src/assets',
        },
      },
    ],
  ],
};
