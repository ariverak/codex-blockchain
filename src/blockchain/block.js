import { SHA256 } from 'crypto-js';

class Block {
  constructor(timestamp, previousHash, hash, data) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  static get genesis() {
    const timestamp = new Date(2021, 0, 1).getTime();
    return new this(timestamp, undefined, 'g3n3s1s-hash', {});
  }

  static hash(timestamp, previousHash, data) {
    return SHA256(
      `${timestamp}${previousHash}${JSON.stringify(data)}`,
    ).toString();
  }

  static mine(previousBlock, data) {
    const timestamp = Date.now();
    const hash = Block.hash(timestamp, previousBlock, data);
    const { hash: previousHash } = previousBlock;
    return new this(timestamp, previousHash, hash, data);
  }

  toString() {
    const { timestamp, previousHash, hash, data } = this;
    return `Block -
      timestamp: ${timestamp}
      previousHash: ${previousHash}
      hash: ${hash}
      data: ${JSON.stringify(data)}
    `;
  }
}

export default Block;
