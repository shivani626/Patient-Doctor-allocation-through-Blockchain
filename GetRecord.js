import React, { Component } from 'react';

class GetRecord extends Component {
  state = {
    recordId: '',
    record: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { contract } = this.props;
    const { recordId } = this.state;
    try {
      const recordData = await contract.methods.getRecord(recordId).call();
      console.log('Record Data:', recordData); // Log the returned data for inspection
  
      const record = {
        recordId: recordData[0].toString(),
        timestamp: recordData[1].toString(),
        name: recordData[2],
        age: recordData[3].toString(),
        gender: recordData[4],
        bloodType: recordData[5],
        allergies: recordData[6].join(', '),
        diagnosis: recordData[7].join(', '),
        treatment: recordData[8].join(', '),
      };
  console.log(record);
      this.setState({ record });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get record. Check console for details.');
    }
  };

  render() {
    const { record } = this.state;
    return (
      <div className="card">
        <h2>Get Record</h2>
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
          <button className="btn" type="submit">
            Get Record
          </button>
        </form>
        {record && (
          <div className="card">
            <h3>Record Details</h3>
            <p>Record ID: {record.recordId}</p>
            <p>Timestamp: {record.timestamp}</p>
            <p>Name: {record.name}</p>
            <p>Age: {record.age}</p>
            <p>Gender: {record.gender}</p>
            <p>Blood Type: {record.bloodType}</p>
            <p>Allergies: {record.allergies}</p>
            <p>Diagnosis: {record.diagnosis}</p>
            <p>Treatment: {record.treatment}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GetRecord;