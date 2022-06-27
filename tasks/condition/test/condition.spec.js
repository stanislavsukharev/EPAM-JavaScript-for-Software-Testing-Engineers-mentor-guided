const expect = require('chai').expect;

const {
  z1,
  z2,
  x,
  y,
  calc,
  calculateDiscount
} = require('../condition');

describe('Task 1 - y < 10', () => {

  it('z1 should equal expected value', () => {
    const ex = expect(z1);
    if (y < 10) ex.to.equal(x + y);
    else if (y > 10) ex.to.equal(x * y);
    else throw new Error('y is wrong');
  });

  it('z2 should equal expected value', () => {
    const ex = expect(z2);
    if (y < 10) ex.to.equal(x + y);
    else if (y > 10) ex.to.equal(x * y);
    else throw new Error('y is not defined');
  });

});

describe('Task 2 - operator', () => {

  it('task2 should equal expected value', () => {
    expect(calc("add", 6, 2)).to.equal(8);
    expect(calc("subtract", 5, 3)).to.equal(2);
    expect(calc("multiply", 3, 2)).to.equal(6);
    expect(calc("divide", 4, 2)).to.equal(2);
  });

});

describe('Task 3 - discount', () => {

  it('discount should equal expected value', () => {
    expect(calculateDiscount(10), "10 redemption should produce 0% discount").to.equal(0);
    expect(calculateDiscount(350), "350 redemption should produce 0% discount").to.equal(0);
    expect(calculateDiscount(351), "351 redemption should produce 15% discount").to.equal(15);
    expect(calculateDiscount(400), "400 redemption should produce 15% discount").to.equal(15);
    expect(calculateDiscount(1351), "1351 redemption should produce 30% discount").to.equal(30);
    expect(calculateDiscount(2000), "2000 redemption should produce 30% discount").to.equal(30);
    expect(calculateDiscount(6000), "6000 redemption should produce 45% discount").to.equal(45);
  });

});