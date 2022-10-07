const truffleAssert = require('truffle-assertions');
const contractTruffle = require('truffle-contract');
const { toWei, toBN, fromWei } = web3.utils;
const timeHelper = require('./utils/index');

/* Contract Artifacts */
// const IERC20 = artifacts.require('IERC20');


contract('Test', async (accounts) => {  
  let owner;
  let tester;

  let snapShotId; // test blockchain snapshot

  before(async () => {
    snapShotId = await timeHelper.takeSnapshot();

  });

  after(async () => {
    await timeHelper.revertToSnapShot(snapShotId);
  });

  it('Empty', async () => {
    // TODO: tests
  });

});