import React, { Component } from 'react';
import { data } from './users-data';
import Table from './Table/Table'
import Buttons from './Buttons/Buttons'
import Form from './Form/Form'
import './Form/form.css'


class App extends Component {

   
  render() {
    return (
      <div className='container'>
        <Form />
        <Table data={data}/>
      </div>
      
    );
  }
}

export default App;

// console.log(data.users)