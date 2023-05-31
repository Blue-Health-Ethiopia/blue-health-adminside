import React from 'react';
import Header from './../../Reuseable/Header';
import { Table } from 'antd';
const columns = [
  {
    title: 'id',
    dataIndex: 'uid',
    key: 'name',
  },
  {
    title: 'Name',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'age',
  },
  {
    title: 'phone number',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'school',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'schedule',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'informed form',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'bank',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'transaction code',
    dataIndex: 'username',
    key: 'name',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <button className="p-1 border rounded-md hover:bg-primary hover:text-white">
        send email
      </button>
    ),
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const SummerRegister = () => {
  const handleSearch = () => {};
  return (
    <div>
      <Header pageName="Summer Register" onSearch={handleSearch} />
      <Table
        className="w-[66rem] m-3 p-1"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default SummerRegister;
