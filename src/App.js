import React from 'react';
import {TextForm, TelInputForm, ImageUpload, ActivitySelect, FileInputForm, DatePickerForm, NumForm} from './s';
require('../CSS/styles.css');

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className='react-container'>
        <TextForm className = 'nameForm' placeholder='Name' pattern='^[a-zA-ZА-Яа-я\s]+$'/>
        <ImageUpload className='imageInputForm' />
        <div  className='activitySelect' >
          <ActivitySelect/>
        </div>
        <div className='activityChildren'>
          <div className='offerFields' id='offerFormFields' style={{display: 'none'}}>
            <NumForm className='summForm' placeholder='Summ' pattern='^[ 0-9]+$'/>
            <FileInputForm className='fileInput'/>
          </div>
          <div className='contractfields' id='contractFormFields' style={{display: 'none'}}>
            <TextForm className='contractNumForm' placeholder='Contract number' pattern='^[ 0-9]+$'/>
            <DatePickerForm className='datePicker'/>
          </div>
        </div>
        <TelInputForm/>
      </div>
  )
  }
}

export default App
