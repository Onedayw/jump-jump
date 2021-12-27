const JumpToken = artifacts.require('./JumpToken.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Jump Token', (accounts) => {
  let token;

  before(async () => {
    token = await JumpToken.deployed();
  })

  describe('deployment', async() => {
    it('deploys successfully', async() => {
      const address = token.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it('has a name', async() => {
      const name = await token.name();
      assert.equal(name, 'Jump Token');
    });

    it('has a symbol', async() => {
      const name = await token.symbol();
      assert.equal(name, 'JUMP');
    });
  });
});
