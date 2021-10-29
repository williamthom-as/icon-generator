import { expect } from 'chai';
import { generateMD5, extractColorPalette, extractPatternSequencing } from '../src/index';

describe('generateMD5', () => {
  it('should return md5 from str', () => {
    expect(generateMD5('mystr')).to.eq('a2e5af2b43d7718dd91d5bd4547000b8')
  });

  it('should return null if passed garbage', () => {
    expect(generateMD5(undefined)).to.eq(null)
  });
});

describe('extractColorPalette', () => {
  it('should return md5 from str', () => {
    expect(extractColorPalette('mystr').length).to.be.greaterThan(0)
  });
});

describe('extractPatternSequencing', () => {
  it('should return array of decimals from str', () => {
    let arr = extractPatternSequencing('mystr');
    expect(arr.length).to.be.greaterThan(0)
  });
});