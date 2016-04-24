import React from 'react'
var expect = require('expect');
import testUtils from 'react/lib/ReactTestUtils'
import Status from '../../src/jsx/components/status'
import ReferenceComponent from '../../src/jsx/components/referenceComponent'

describe('test suite works', function () {
    it('tautology', function () {
        expect(1).toEqual(1);
    });
});

describe('build is ok', function () {
    it('testing 4 ', function () {
        var board = {player:1, gameOver:false, winner:0}
        var status = testUtils.renderIntoDocument(<Status board={board} />);
        expect(status).toExist();
    });
});