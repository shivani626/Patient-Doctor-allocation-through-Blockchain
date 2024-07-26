import React, { Component } from 'react';

class TransferPatients extends Component {
  state = {
    doctor: '',
    patient: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { accounts, contract } = this.props;
    const { doctor, patient } = this.state;

    try {
      await contract.methods
        .transferPatient(doctor, patient)
        .send({ from: accounts[0] });
      alert('Patient transferred successfully!');
      this.setState({ doctor: '', patient: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to transfer Patient. Check console for details.');
    }
  };

  render() {
    return (
      <div className="card">
        <h3>Transfer Patient</h3>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="doctor">Doctor Address:</label>
            <input
              type="text"
              id="doctor"
              name="doctor"
              value={this.state.doctor}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patient">Patient ID:</label>
            <input
              type="text"
              id="patient"
              name="patient"
              value={this.state.patient}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">Transfer Patient</button>
        </form>
      </div>
    );
  }
}

export default TransferPatients;