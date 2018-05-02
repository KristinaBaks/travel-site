// an object that tells webpack what to do

var path = require('path'); //path.resolve(__dirname, "./app/temp/scripts")

module.exports = {
    mode: "production",
    entry: { // a single path would be: "entry: "./app/assets/scripts/app.js"". wherefrom the bundle should be created
      App: "./app/assets/scripts/app.js",
      Vendor: "./app/assets/scripts/Vendor.js"
    }, 
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"), // where the bundled file is created, but webpack nees an absolute path, thats why you need to create var path and dirname
        filename: "[name].js" // single file would be - "App-bundled.js". [name] means that a separate bundle file for vendor and app
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
    }
}


// module: {
//     loaders: [
//         {
//             loader: 'babel-loader',
//             query: {
//                 presets: ['es2015']
//             },
//             test: /\.js$/, // tells webpack that we want this babel loader plugin to be applies just to js files
//             exclude: /node_modules/ // we tell that not all js files should be converted. the less files run through babel the faster loading
//         }
//     ]
// }