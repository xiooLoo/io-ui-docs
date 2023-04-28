module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    '@vue/app',
    {
      modules: 'umd'
    }
    // '@vue/babel-preset-jsx'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ]
};
