// const main123 = async () => {
//   const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
//   const waveContract = await waveContractFactory.deploy({
//     value: hre.ethers.utils.parseEther('0.1'),
//   });
//   await waveContract.deployed();
//   console.log('Contract addy:', waveContract.address);
//
//   let contractBalance = await hre.ethers.provider.getBalance(
//     waveContract.address
//   );
//   console.log(
//     'Contract balance:',
//     hre.ethers.utils.formatEther(contractBalance)
//   );
//
//   /*
//    * Let's try two waves now
//    */
//   const waveTxn = await waveContract.wave('This is wave #1');
//   await waveTxn.wait();
//
//   const waveTxn2 = await waveContract.wave('This is wave #2');
//   await waveTxn2.wait();
//
//   contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
//   console.log(
//     'Contract balance:',
//     hre.ethers.utils.formatEther(contractBalance)
//   );
//
//   let allWaves = await waveContract.getAllWaves();
//   console.log(allWaves);
// };


const main = async () => {
  const GraphEmailFactory = await hre.ethers.getContractFactory("GraphBasedEmailSystem");
  const GraphEmailContract = await GraphEmailFactory.deploy();
  await GraphEmailContract.deployed();
  console.log('Contract addy:', GraphEmailContract.address);
  const [_, randomPerson] = await hre.ethers.getSigners();
  console.log("randomPerson", randomPerson)
  let response = await GraphEmailContract.connect(randomPerson).Register("GttzGcUuGY84c1UVr2xGCwLrOini+WkQj5xpSf4+EE8=")
  // console.log(response)

  response = await GraphEmailContract.GetReceiverPublicKey(randomPerson.address);
  console.log(response)

}




const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();