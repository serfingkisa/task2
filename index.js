var crypto = require('crypto');
let str = 'asdasdas';
let result = crypto.createHash('sha256').update(str).digest('hex')
console.log('hashiruem - ' + result);
