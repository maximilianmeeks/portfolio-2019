require('dotenv').config()

const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    target: 'serverless',
    webpack: (config, { dev }) => {
      config.plugins = config.plugins || []
      config.module.rules.push(
        {
          test: /\.(css|scss)/,
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]'
          }
        },
        {
          test: /\.css$/,
          loader: 'babel-loader!raw-loader'
        },
        {
          test: /\.scss$/,
          loader: 'babel-loader!raw-loader!sass-loader'
        }
      )

      

      config.plugins = [
        ...config.plugins,
  
        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]

      return config
    }

  }
