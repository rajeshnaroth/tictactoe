var React = require('react');
var expect = require('expect');
//var App = require('../../src/jsx/components/app'); //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('root', function () {
    it('test testing', function () {
        console.log('here')
        expect(1).toEqual(1);
        expect(2).toEqual(2);
    });
    it('test testing 2', function () {
        expect(3).toEqual(3);
    });
});