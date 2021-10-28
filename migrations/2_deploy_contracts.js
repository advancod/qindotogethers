const TogethersCoin = artifacts.require("./token/TogethersCoin");
const Togethers = artifacts.require("./main/Togethers");
const Control = artifacts.require("./main/Control");

const gasLimit = 9000000

module.exports = function(deployer) {

  deployer.deploy(TogethersCoin, {gas : gasLimit}).then(function() {
    return deployer.deploy(Togethers, {gas : gasLimit});
    }).then(function() {
              return Togethers.deployed();
              }).then(function(instance) {
                return instance.setUser("Inventor","", {gas : gasLimit});
                }).then(function() {
                  return Togethers.deployed();
                  }).then(function(instance) {
                    return instance.createGroup("Genesis", {gas : gasLimit});
                    }).then(function() {
                      return deployer.deploy(Control, {gas : gasLimit});
                      })
};
