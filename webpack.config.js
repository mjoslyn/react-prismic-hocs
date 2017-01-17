const webpack = require('webpack')

module.exports = {

  output: {
    library: 'ReactPrismic',
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}
