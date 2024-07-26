import React, { Component } from 'react';

class DeleteRecord extends Component {
  state = {
    recordId: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { accounts, contract } = this.props;
    const { recordId } = this.state;

    try {
      await contract.methods
        .deleteRecord(recordId)
        .send({ from: accounts[0] });
      alert('Record deleted successfully!');
      this.setState({ recordId: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete record. Check console for details.');
    }
  };

  render() {
    return (
      <div className="card">
        <h2>Delete Record</h2>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="recordId">Record ID:</label>
            <input
              type="text"
              id="recordId"
              name="recordId"
              value={this.state.recordId}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn"  type="submit">Delete Record</button>
        </form>
      </div>
    );
  }
}

export default DeleteRecord;