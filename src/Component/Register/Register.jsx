import React, { useState } from 'react';
import Header from './../../Reuseable/Header';
import Table from './../../Reuseable/Table';

const Register = () => {
  const [showTableAll, setShowTableAll] = useState(true);
  const [showTableOne, setShowTableOne] = useState(false);
  const [showTableTwo, setShowTableTwo] = useState(false);

  const [usersAll, setUsersAll] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'CPD' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'First AID' },
    { id: 3, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'First AID' },
    { id: 4, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 6, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 7, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
  ]);

  const [usersone, setUsersone] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'CPD' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 3, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 4, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 6, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
    { id: 7, name: 'Jane Doe', email: 'jane@example.com', status: 'CPD' },
  ]);

  const [userstwo, setUserstwo] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'First AID' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', status: 'First AID' },
    { id: 3, name: 'Jane Doe', email: 'jane@example.com', status: 'First AID' },
  ]);

  const columnAll = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Registered in', accessor: 'status' },
  ];
  const columnone = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Registered in', accessor: 'status' },
  ];

  const columntwo = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Registered in', accessor: 'status' },
  ];
  const handleEdit = (user) => {
    // Handle edit action
  };

  const handleSearch = (searchValue) => {};

  return (
    <div>
      <Header pageName="Register" onSearch={handleSearch} />
      <div className="pl-5 mt-3 space-x-5 text-xl font-medium text-gray-600  ">
        <button
          className="hover:underline active:underline focus:underline"
          onClick={() => {
            setShowTableAll(true);
            setShowTableOne(false);
            setShowTableTwo(false);
          }}
        >
          All
        </button>
        <button
          className="hover:underline active:underline focus:underline"
          onClick={() => {
            setShowTableAll(false);
            setShowTableOne(true);
            setShowTableTwo(false);
          }}
        >
          CPD
        </button>
        <button
          className="hover:underline active:underline focus:underline"
          onClick={() => {
            setShowTableAll(false);
            setShowTableOne(false);
            setShowTableTwo(true);
          }}
        >
          First AID
        </button>
      </div>
      {showTableAll && (
        <Table data={usersAll} columns={columnone} onEdit={handleEdit} />
      )}
      {showTableOne && (
        <Table data={usersone} columns={columnone} onEdit={handleEdit} />
      )}
      {showTableTwo && (
        <Table data={userstwo} columns={columntwo} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default Register;
