import React, { Component } from 'react';
import { data } from './users-data';
import Table from './Table/Table'
import Buttons from './Buttons/Buttons'


class App extends Component {

   
  render() {
    return (
      <div className='container'>
        <Table data={data}/>
      </div>
    );
  }
}

export default App;

// console.log(data.users)