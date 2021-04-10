const assert = require('chai').assert;
const teach = require('../p5-teach');

describe('Teach',function(){
    it('teach should return hello', function(){
        assert.equal(teach(),'hello');
    });
});