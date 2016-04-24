import React from 'react'
var expect = require('expect');
import testUtils from 'react/lib/ReactTestUtils'
import Status from '../../src/jsx/components/status'
import ReferenceComponent from '../../src/jsx/components/referenceComponent'

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
        var testComp = testUtils.renderIntoDocument(<ReferenceComponent />);
        //console.log(testComp);
        expect(testComp).toExist();
    });

    it('testing 4 ', function () {
        var board = {player:1, gameOver:false, winner:0}
        console.log('#########');
        var status = testUtils.renderIntoDocument(<Status board={board} />);
        console.log(status);
        expect(status).toExist();
    });
});