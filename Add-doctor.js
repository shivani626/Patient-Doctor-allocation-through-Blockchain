import React, { Component } from 'react';

class AddDoctor extends Component {
  state = {
    doctorAddress: '',
    doctorName: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { accounts,contract } = this.props;
    const { doctorAddress, doctorName } = this.state;
    try {
      await contract.methods.addDoctor(doctorAddress, doctorName).send({ from:accounts[0] });
      alert('Doctor added successfully!');
      this.setState({ doctorAddress: '', doctorName: '' }); // Reset the form fields
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add doctor. Check console for details.');
    }
  };

  render() {
    return (
      <div className="card">
        <h2>Add Doctor</h2>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="doctorAddress">Doctor Address:</label>
            <input
              type="text"
              id="doctorAddress"
              name="doctorAddress"
              value={this.state.doctorAddress}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctorName">Doctor Name:</label>
            <input
              type="text"
              id="doctorName"
              name="doctorName"
              value={this.state.doctorName}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="btn" type="submit">
            Add Doctor
          </button>
        </form>
      </div>
    );
  }
}

export default AddDoctor;