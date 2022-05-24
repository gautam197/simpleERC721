const { assert } = require("chai")

const MyContract = artifacts.require('./src/contracts/MyContract.sol')

require ("chai").use(require('chai-as-promised')).should()

contract ("MyContract",(account)=>{
    let contract
    before(async()=>{
        contract = await MyContract.deployed() 
    })
    describe("development", async()=>{
        it("deploys successfully", async()=>{ 
            
            const address = contract.address
            assert.notEqual(address, "")
            assert.notEqual(address, 0x0) 
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
        it('has a name', async()=>{ 
             const name = await contract.name()
             assert.equal(name, "Prof. Gotiya")
        })
        it("has as symbol", async()=>{
            const symbol = await contract.symbol()
            assert.equal(symbol, "GP")
        })
    })
    
})