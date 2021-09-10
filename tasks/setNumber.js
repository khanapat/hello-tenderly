task("setNumber", "Set Number")
    .addParam("address", "Contract Address")
    .setAction(async (taskArgs, hre) => {
        const greeter = await hre.ethers.getContractAt("Greeter", taskArgs.address);

        console.log("Old greeting: " + await greeter.number());

        const [signer] = await hre.ethers.getSigners();

        const tx = await greeter.connect(signer).setNumber(1200);
        await tx.wait(1);

        console.log("New Number: " + await greeter.number());
    });

module.exports = {}