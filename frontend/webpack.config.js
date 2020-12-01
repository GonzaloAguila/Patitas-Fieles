module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: __dirname + "/../backend/public",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    context: __dirname,
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-react", "@babel/env"],
          },
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader",
        },
        {
          test: /\.(jpg|svg|png|jpeg)$/ , 
          loader:"file-loader"
        },
        {
          test: /\.(html)$/ , 
          loader:"html-loader"
        },
        { test: /\.svg$/,
          use: ['@svgr/webpack'],
        }
      ],
    },
    devtool: "source-map",
  };