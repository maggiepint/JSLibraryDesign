const expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return a number', function() {
        expect([1,2,3].indexOf(4)).to.be.a('number');
    });
  });
});

