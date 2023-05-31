import React from 'react'
import Header from './../../Reuseable/Header';

const Dashboard = () => {
    const handleSearch = (searchValue) => {
    };
  return (
    <div>
    <Header pageName='Dashboard' onSearch={handleSearch}/> 
    </div>
  )
}

export default Dashboard
