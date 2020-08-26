const glob = require('glob');
const path = require('path');
const config = require(path.resolve(process.cwd(), './potoo.config.json'));

const list = glob.sync(path.resolve(process.cwd(), config.dir));

for (let i = 0 ; i < list.length; i++){
    require(list[i]);
}