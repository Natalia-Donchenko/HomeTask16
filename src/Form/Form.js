import { Button } from 'bootstrap';
import React from 'react';



export default props => (
  <div className='form'>
    <h1 className='form__title'>User Editor</h1>
    <form className='form__editor'>

      <label className='form__editor-label'>Firts Name*</label>
      <input className='form__editor_input' type="text" name="first_name"></input>

      <label className='form__editor-label'>Last Name*</label>
      <input className='form__editor_input' type="text" name="last_name"></input>

      <label className='form__editor-label'>Email</label>
      <input className='form__editor_input' type="email" name="email"></input>

    </form>

    <button className='btn btn-primary' type="submit">Submit</button>

  </div>

)