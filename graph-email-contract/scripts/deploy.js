const main = async () => {
  const GraphEmailFactory = await hre.ethers.getContractFactory("GraphBasedEmailSystem");
  const GraphEmailContract = await GraphEmailFactory.deploy();
  await GraphEmailContract.deployed();
  console.log('Contract addy:', GraphEmailContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();