import React from 'react';
import AddRecord from './AddRecord';
import DeleteRecord from './DeleteRecord';

const RecordOperations = ({ accounts, contract }) => {
  return (
    <div className="record-operations">
      <AddRecord accounts={accounts} contract={contract} />
      <DeleteRecord accounts={accounts} contract={contract} />
    </div>
  );
};

export default RecordOperations;