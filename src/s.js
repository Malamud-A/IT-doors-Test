import React from 'react';
import FileInput from 'react-file-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('../CSS/styles.css');
require('../node_modules/react-datepicker/dist/react-datepicker.css');
import TelInput from 'react-telephone-input/lib/withStyles';
import Select2 from 'react-select2';
import 'react-select2/css/select2.css';

export class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <input type="text"
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          value={this.state.value}
          className={this.props.className}
          onChange={this.handleChange} />

    );
  }
}



export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width:190, height:100}} src={imagePreviewUrl} />);
    } else {
      $imagePreview = null;
    }
    // <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>

    return (
      <div className="previewComponent">
        <form style={{marginBottom: 0}} onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export class ActivitySelect extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {value :''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
    if (this.state.value == 3) {
      document.getElementById('contractFormFields').style.display="none";
      document.getElementById('offerFormFields').style.display="block";
    }
    else if (this.state.value == 4){
      document.getElementById('offerFormFields').style.display="none";
      document.getElementById('contractFormFields').style.display="block"
    }
    else{
      document.getElementById('offerFormFields').style.display="none";
      document.getElementById('contractFormFields').style.display="none";
    }
  }


  render(){
    return(
      <Select2
        value = {this.state.value}
        data={[
          { text: 'meeting', id:1},
          { text: 'call', id:2},
          { text: 'offer', id:3},
          { text: 'contract', id:4},
        ]}
        options={{
          placeholder: 'choose an activity',
        }}
        className={this.props.className}
        onChange ={this.handleChange}
      />
    )
  }
}


export class FileInputForm extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <form>
        <FileInput name="offerFile"
                   placeholder="Your Offer ( click to upload )"
                   className="offerFileForm" />
      </form>
    )
  }
}

export class DatePickerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {startDate: moment()};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date){
    this.setState({startDate: date})
  }

  render(){
    return(
      <DatePicker
      placeholder='Date: '
      dateFormat='DD/MM/YYYY'
      selected={this.state.startDate}
      className={this.props.className}
      onChange={this.handleChange}/>
    )
  }
}

export class TelInputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {telNumberState : ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(telNumber){
    this.setState({telNumberState : telNumber});
  }

  render(){
      return(
        <TelInput
          value = {this.state.telNumber}
          flagsImagePath={require('./flags.png')}
          defaultCountry='ua'
          preferredCountries = {['ua', 'ru']}
          className={this.props.className}
          onBlur={this.handleChange}/>
      )
  }

}
export class NumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleBlur(event) {
    this.setState({value: Number(event.target.value).toFixed(2)});

    setTimeout( ()=> {
      if(!this.state.value || this.state.value == 'NaN'){
      this.setState({value: 0});  }
    } , 0)
  }

  render() {
    return (
        <input type="text"
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          value={this.state.value}
          className={this.props.className}
          onChange={this.handleChange}
          onBlur={this.handleBlur} />

    );
  }
}

// export class JSONinfo extends React.Component{
//   var JSONname, JSONPhoneId, JSONActivityId, JSONContractNum, JSONContractDate, JSONOfferSum, JSONOfferFileId;
// }
