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

            <div className="input-item">
              <label htmlFor="subjectCode">
                <span className="label">科目記号</span>
                {this.state.subjectCodeError ? (
                  <span className="error-mesg">&#042;選択してください</span>
                  ) : null}
              </label>
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
            </div>

            <div className="input-item">
              <label htmlFor="hwNo">
                <span className="label">課題No.</span>
                {this.state.hwNoError ? (
                  <span className="error-mesg">&#042;入力してください</span>
                  ) : null}
              </label>
              <input 
                id="hwNo"
                type="number" 
                name="hwNo" 
                value={this.state.hwNo} 
                onChange={this.handleChange}
                min="1"
                max="40" />
            </div>

            <div className="input-item">
              <label htmlFor="title">
                <span className="label">課題主題</span>
                {this.state.titleError ? (
                  <span className="error-mesg">&#042;入力してください</span>
                  ) : null}
              </label>
              <input 
                id="title"
                type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.handleChange}
                maxLength="100" />
            </div>

            <div className="input-item">
              <label htmlFor="deadline">
                <span className="label">納期</span>
                {this.state.deadlineError ? (
                  <span className="error-mesg">&#042;選択してください</span>
                  ) : null}
              </label>
              <input
                id="deadline"
                type="date" 
                name="deadline"
                value={this.state.deadline}
                onChange={this.handleChange} />
            </div>

            <div className="input-item">
              <span className="label">課題種類</span>
              <label htmlFor="jobtype1">
                  <input
                  id="jobtype1"
                  type="radio"
                  name="jobtype"
                  value="0"
                  />訓練
              </label>
              <label htmlFor="jobtype2">
                  <input
                  id="jobtype2"
                  type="radio"
                  name="jobtype"
                  value="1"
                  />評価
              </label>
            </div>

            <div className="input-item">
              <span className="label">サーバー提出</span>
              <label htmlFor="toServer">
                  <input
                  id="toServer"
                  type="checkbox"
                  name="toServer"
                  value="1"
                  /> あり
              </label>
            </div>
            
            <button className="btn" onClick={this.handleSubmit}>登録</button>
          </div>
        </div>
      </div>
    );
  }
}