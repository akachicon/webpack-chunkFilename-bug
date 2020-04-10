const path = require('path');
const webpack = require('./webpack@4/node_modules/webpack');
const config = require('./config')({ dist: path.resolve('./dist-webpack@4') });

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
});
