import Block from './block';

describe('Block', () => {
  let timestamp;
  let previousBlock;
  let hash;
  let data;

  beforeEach(() => {
    timestamp = new Date(2010, 0, 1);
    previousBlock = Block.genesis;
    hash = 'h4sh';
    data = { amount: 1000 };
  });

  it('create an instance with parameters', () => {
    const block = new Block(timestamp, previousBlock.hash, hash, data);
    expect(block.timestamp).toEqual(timestamp);
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  it('use static mine()', () => {
    const block = Block.mine(previousBlock, data);
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(block.hash.length).toEqual(64);
    expect(block.data).toEqual(data);
  });
  it('use static hash()', () => {
    hash = Block.hash(timestamp, previousBlock, data);
    const hashOut =
      '225bb8eaab49db84347f8fbc0702e51ae73921e940cb998086a1b19a71d12724';
    expect(hash).toEqual(hashOut);
  });
  it('use toString()', () => {
    const block = Block.mine(previousBlock, data);
    expect(typeof block.toString() === 'string');
  });
});
