import React, { Component } from 'react';

class RecordList extends Component {
  render() {
    const { records } = this.props;

    return (
      <div className="card">
        <h2>Record List</h2>
        {records.length === 0 ? (
          <p>No records found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Timestamp</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Type</th>
                <th>Allergies</th>
                <th>Diagnosis</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.recordId}</td>
                  <td>{record.timestamp}</td>
                  <td>{record.name}</td>
                  <td>{record.age}</td>
                  <td>{record.gender}</td>
                  <td>{record.bloodType}</td>
                  <td>{record.allergies}</td>
                  <td>{record.diagnosis}</td>
                  <td>{record.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default RecordList;