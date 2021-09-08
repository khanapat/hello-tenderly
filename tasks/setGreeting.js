task("setGreeting", "Set Greeting")
    .addParam("address", "Contract Address")
    .setAction(async (taskArgs, hre) => {
        const greeter = await hre.ethers.getContractAt("Greeter", taskArgs.address);

        console.log("Old greeting: " + await greeter.greet());

        const [signer] = await hre.ethers.getSigners();

        const tx = await greeter.connect(signer).setGreeting("BOBO");
        await tx.wait(1);

        console.log("New greeting: " + await greeter.greet());
    });

module.exports = {}