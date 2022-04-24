module.exports = {
  plugins: [
    require('postcss-pxtorem')({ rootValue: 16, unitPrecision: 5, propList: ['*'] })
  ]
}