const { spawnSync } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('./node_modules/')) {
  spawnSync('mkdir', ['./node_modules']);
}

['webpack@4', 'webpack@next'].forEach(webpack => {
  console.log(`installing ${webpack}...`);

  spawnSync('npm', ['install', webpack]);
  spawnSync('mkdir', [webpack]);
  spawnSync('mv', ['./node_modules', `./${webpack}/node_modules`]);
  spawnSync('rm', ['-rf', './node_modules']);

  console.log(`${webpack} installed\n`);
});
