module.exports = {
  presets: [['next/babel']],
  plugins: ['babel-plugin-macros', ['babel-plugin-styled-components', { ssr: true }]],
};