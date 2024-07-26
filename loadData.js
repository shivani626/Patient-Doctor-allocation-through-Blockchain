import Web3 from 'web3';
import MedicalRecordsABI from '../abis/MedicalRecords.json';

const loadData = async () => {
  try {
    // Check if Web3 is already injected by the browser (e.g., MetaMask)
    let web3;

    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      // Fallback to localhost provider
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    }
    // Get the user's accounts
    const accounts = await web3.eth.getAccounts();
    console.log("accounts:", accounts);
    // Get the network ID
    const contractaddress = '0x67c410375b50BDAbB687F872a612f847b3213566';
    const instance = new web3.eth.Contract(
      MedicalRecordsABI,contractaddress
    );

    // Get the contract owner
   

    // Load all records
    

    return { web3, accounts, contract: instance};
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



export default loadData;