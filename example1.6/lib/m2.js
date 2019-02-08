exports.id = 'm2';

exports.content = [4];
exports.content.push(44);
exports.content.push(444);

const m1 = require('./m1');
console.log('m1 is not loaded yet', m1);