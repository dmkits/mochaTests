const assert = require('chai').assert;
//const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

    describe('App', function(){
        it('sayHello should return hello', function(){
           var result = sayHello();
            assert.equal(result,'hello');
         });
        it('sayHello should return type string', function(){
            var result = sayHello();
            assert.typeOf(result,'string');
        });
        it('addNumbers should be above 5',function(){
            var result=addNumbers(5,5);
            assert.isAbove(result,5);
        })
        it('addNumbers should return type number',function(){
            var result=addNumbers(5,5);
            assert.typeOf(result,'number');
        })
});