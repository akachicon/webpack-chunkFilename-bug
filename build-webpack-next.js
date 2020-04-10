const path = require('path');
const webpack = require('./webpack@next/node_modules/webpack');
const config = require('./config')({ dist: path.resolve('./dist-webpack@next') });

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
});
