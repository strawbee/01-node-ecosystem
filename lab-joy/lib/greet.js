'use strict';

exports.greet = str => (typeof str !== 'string' || !str) ? null : str === 'hello' ? 'hello world' : 'hello ' + str;