module.exports = {
  babelrcRoots: ['packages/*'],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['emotion', { 'inline': true }]
  ]
}
