const assert = require('chai').assert;
const sayHello = require('../p5-teach').sayHello;
const addNumbers = require('../p5-teach').addNumbers;
//const teach = require('../p5-teach');

describe('Teach',function(){
    describe('sayHello()',function(){

        it('sayHello should return hello', function(){
            let result = sayHello();
            //let result = teach.sayHello(); also can be done if const teach = require('../p5-teach');
            assert.equal(result,'hello');
        });
    
        it('sayHello should return type string',function(){
            let result = sayHello();
            assert.typeOf(result,'string');
        });

    });
    
    describe('addNumbers()',function(){

        it('addNumbers should be above 5',function(){
            let result = addNumbers(5,5); //pass
            //let result = addNumbers(1,1); //fail
            assert.isAbove(result,5);
        });
    
        it('addNumbers should return type number',function(){
            let result = addNumbers(5,5); 
            assert.typeOf(result,'number');
        });

    });
    
});