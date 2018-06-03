module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
      path: __dirname + '/out',
      publicPath: '/js/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: __dirname,
      port: 5000,
      inline: true
    },
    target: "node",
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options:  {
            presets: ['env', 'react']
          }
        }
      ]
    },
    mode: 'production'
  };
  
