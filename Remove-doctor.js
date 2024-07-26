import React, { Component } from 'react';

class RemoveDoctor extends Component {
  state = {
    doctorAddress: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { accounts,contract } = this.props;
    const { doctorAddress } = this.state;
    try {
      await contract.methods.removeDoctor(doctorAddress).send({ from: accounts[0] });
      alert('Doctor removed successfully!');
      //this.setState({ doctorAddress: '' }); // Reset the form field
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to remove doctor. Check console for details.');
    }
  };

  render() {
    return (
      <div className="card">
        <h2>Remove Doctor</h2>
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
          <button className="btn" type="submit">
            Remove Doctor
          </button>
        </form>
      </div>
    );
  }
}

export default RemoveDoctor;