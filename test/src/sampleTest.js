var React = require('react');
var expect = require('expect');
var testUtils = require('react/lib/ReactTestUtils')
var App = require('../../src/jsx/components/app');

describe('root', function () {
    it('testing 1', function () {
        console.log('here')
        expect(1).toEqual(1);
        expect(2).toEqual(2);
    });
    it('testing 2', function () {
        expect(3).toEqual(3);
    });

    it('testing 3 ', function () {
        var app = testUtils.renderIntoDocument(<App />);
        expect(app).toExist();
    });
});