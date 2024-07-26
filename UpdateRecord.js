import React, { Component } from 'react';

class UpdateRecord extends Component {
  state = {
    recordId: '',
    name: '',
    allergies: [''],
    diagnosis: [''],
    treatment: [''],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleArrayChange = (event, index, field) => {
    const newArray = [...this.state[field]];
    newArray[index] = event.target.value;
    this.setState({ [field]: newArray });
  };

  handleAddField = (field) => {
    this.setState({ [field]: [...this.state[field], ''] });
  };

  handleRemoveField = (index, field) => {
    const newArray = [...this.state[field]];
    newArray.splice(index, 1);
    this.setState({ [field]: newArray });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { accounts, contract } = this.props;
    const { recordId, name, allergies, diagnosis, treatment } = this.state;

    try {
      await contract.methods
        .updateRecord(recordId, name, allergies, diagnosis, treatment)
        .send({ from: accounts[0] });
      alert('Record updated successfully!');
      this.setState({
        recordId: '',
        name: '',
        allergies: [''],
        diagnosis: [''],
        treatment: [''],
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update record. Check console for details.');
    }
  };

  render() {
    const { allergies, diagnosis, treatment } = this.state;

    return (
      <div className="card">
        <h2>Update Record</h2>
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
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Allergies:</label>
            {allergies.map((allergy, index) => (
              <div key={index}>
                <input
                  type="text"
                  name={`allergy-${index}`}
                  value={allergy}
                  onChange={(e) => this.handleArrayChange(e, index, 'allergies')}
                />
                <button className="btn" type="button" onClick={() => this.handleRemoveField(index, 'allergies')}>
                  Remove
                </button>
                <button className="btn" type="button" onClick={() => this.handleAddField('allergies')}>
              Add Allergy
            </button>
              </div>
            ))}
           
          </div>

          <div className="form-group">
            <label>Diagnosis:</label>
            {diagnosis.map((diag, index) => (
              <div key={index}>
                <input
                  type="text"
                  name={`diagnosis-${index}`}
                  value={diag}
                  onChange={(e) => this.handleArrayChange(e, index, 'diagnosis')}
                />
                <button className="btn" type="button" onClick={() => this.handleRemoveField(index, 'diagnosis')}>
                  Remove
                </button>
                <button className="btn" type="button" onClick={() => this.handleAddField('diagnosis')}>
              Add Diagnosis
            </button>
              </div>
            ))}
            
          </div>

          <div className="form-group">
            <label>Treatment:</label>
            {treatment.map((treat, index) => (
              <div key={index}>
                <input
                  type="text"
                  name={`treatment-${index}`}
                  value={treat}
                  onChange={(e) => this.handleArrayChange(e, index, 'treatment')}
                />
                <button className="btn" type="button" onClick={() => this.handleRemoveField(index, 'treatment')}>
                  Remove
                </button>
                <button className="btn" type="button" onClick={() => this.handleAddField('treatment')}>
              Add Treatment
            </button>
              </div>
            ))}
            
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateRecord;
