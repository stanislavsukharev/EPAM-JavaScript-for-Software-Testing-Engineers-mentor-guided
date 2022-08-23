const { expect } = require('chai');

const package = require('../../package.json');

describe('Intro', () => {
  it('should invite participants', () => {
    console.log('Welcome to JS Mentoring program. You are ready to start the journey!');
  });

  it('package should have 3 authors', () => {
    expect(package.authors).to.have.length(3);
  });
});
