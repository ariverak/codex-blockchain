import Block from './src/blockchain/block';

const { genesis } = Block;

console.log(genesis.toString());

const block = Block.mine(genesis, { price: 1000 });

const block1 = Block.mine(block, { price: 1000 });

const block2 = Block.mine(block1, { price: 1000 });

console.log(block.toString());
console.log(block1.toString());
console.log(block2.toString());
