import React from 'react';
import '../assets/MyForm.css';

export default class MyForm extends React.Component {
  
  state={
    subjectCode: "",
    hwNo: "",
    title: "",
    deadline: "",
    toServer: false,

    subjectCodeError: false,
    hwNoError: false,
    titleError: false,
    deadlineError: false,
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  validate(){
    const initialError = {
      subjectCodeError: false,
      hwNoError: false,
      titleError: false,
      deadlineError: false,
    }
    
    this.setState(initialError);

    if(this.state.subjectCode && this.state.hwNo && this.state.title && this.state.deadline){
      return true;
    }else{
      if(!this.state.subjectCode){
        this.setState({subjectCodeError: true});
      }
      if(!this.state.hwNo){
        this.setState({hwNoError: true});
      }
      if(!this.state.title){
        this.setState({titleError: true});
      }
      if(!this.state.deadline){
        this.setState({deadlineError: true});
      }
      return false;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state);
    }
  }

  render(){
    return (
      <div className="input-page">
        <div className="wrap">
          <div className="container">
            <h1><span className="bd-left"></span>課題登録</h1>
            <label htmlFor="subjectCode">
              <span className="label">科目記号</span>
              {this.state.subjectCodeError ? (
                <span className="error-mesg">&#042;選択してください</span>
                ) : null}
              <select 
                id="subjectCode"
                name="subjectCode" 
                value={this.state.subjectCode} 
                onChange={this.handleChange}>
                <option value="" hidden>選択してください</option>
                <option value="JV27">JV27</option>
                <option value="SD25">SD25</option>
                <option value="DB25">DB25</option>
              </select>
            </label>
            <label htmlFor="hwNo">
              <span className="label">課題No.</span>
              {this.state.hwNoError ? (
                <span className="error-mesg">&#042;入力してください</span>
                ) : null}
              <input 
                id="hwNo"
                type="number" 
                name="hwNo" 
                value={this.state.hwNo} 
                onChange={this.handleChange}
                min="1"
                max="40" />
            </label>
            <label htmlFor="title">
              <span className="label">課題主題</span>
              {this.state.titleError ? (
                <span className="error-mesg">&#042;入力してください</span>
                ) : null}
              <input 
                id="title"
                type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.handleChange}
                maxLength="100" />
            </label>
            <label htmlFor="deadline">
              <span className="label">納期</span>
              {this.state.deadlineError ? (
                <span className="error-mesg">&#042;選択してください</span>
                ) : null}
              <input
                id="deadline"
                type="date" 
                name="deadline"
                value={this.state.deadline}
                onChange={this.handleChange} />
            </label>
            <label htmlFor="toServer">
                <span className="label">サーバー提出</span>
                <input
                id="toServer"
                type="checkbox"
                name="toServer"
                value="1"
                /> あり
            </label>
            <button className="btn" onClick={this.handleSubmit}>登録</button>
          </div>
        </div>
      </div>
    );
  }
}