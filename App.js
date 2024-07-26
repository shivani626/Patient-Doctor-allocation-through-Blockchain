import React, { Component } from 'react';
import './App.css';
import AddDoctor from './components/Add-doctor';
import AddRecord from './components/AddRecord';
import DeleteRecord from './components/DeleteRecord';
import GetRecord from './components/GetRecord';
import RemoveDoctor from './components/Remove-doctor';
import TransferPatients from './components/TransferPatient';
import UpdateRecord from './components/UpdateRecord';
import loadData from './utills/loadData';


class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
  };

  componentDidMount = async () => {
    try {
      const { web3, accounts, contract} = await loadData();
      

      this.setState({ web3, accounts, contract});
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load data. Check console for details.');
    }
  };

  render() {
    const { accounts, contract} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Medical Records</h1>
        </header>
        <AddRecord accounts={accounts} contract={contract} />
        <AddDoctor accounts={accounts} contract={contract} />
        <RemoveDoctor accounts={accounts} contract={contract} />
        <TransferPatients accounts={accounts} contract={contract}  />
        <UpdateRecord accounts={accounts} contract={contract} />
        <DeleteRecord accounts={accounts} contract={contract} />
        <GetRecord contract={contract} />
        
        
      </div>
    );
  }
}

export default App;