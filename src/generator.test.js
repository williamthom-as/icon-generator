import { expect } from 'chai';
import { md5 } from './generator';

describe('md5', () => {
  it('should return md5 from str', () => {
    expect(md5('mystr')).to.eq('a2e5af2b43d7718dd91d5bd4547000b8')
  });

  it('should return null if passed garbage', () => {
    expect(md5(undefined)).to.eq(null)
  });
});